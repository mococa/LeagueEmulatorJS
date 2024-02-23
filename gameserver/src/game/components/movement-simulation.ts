import { Vector2 } from 'three';
import UnitList from '../../app/unit-list';
import Server from '../../app/server';
import Unit from '../../gameobjects/units/unit';
import { IMovingUnit, MovingUnitEvents } from '../../gameobjects/extensions/traits/moving-unit';
import TypedEventEmitter from 'typed-emitter';
import { IMovingObject } from '../../gameobjects/extensions/traits/moving-object';
import { TeamId } from '../../gameobjects/extensions/traits/team';

// https://leagueoflegends.fandom.com/wiki/Sight#Sight_Ranges
const defaultVisionRange = 1350;

/**
 * @todo a lot of stuff to create here
 * and a lot of stuff to improve here
 * maybe move this to IMovable ?
 */
export default class MovementSimulation {

	//Map = new Vector2(14000, 14000);

	lastSeenUnitsByTeam: { [n: number]: Unit[]; } = {};

	/**
	 * Checks if unit is visible for enemy and broadcasting it
	 * @todo only process units that moved ?
	 */
	visionProcess() {
		let seenUnitsByTeam: { [n: number]: Unit[]; } = {};
		UnitList.units.forEach(unit => {
			if (unit.team.id == TeamId.neutral)
				return;

			if (unit.died)
				return;

			let unitTeamId = unit.team.id;
			let unitPosition = unit.position;
			let unitVisionRange = unit.visionRange || defaultVisionRange;

			seenUnitsByTeam[unitTeamId] = seenUnitsByTeam[unitTeamId] || [];

			UnitList.units.forEach(unit2 => {
				if (unitTeamId == unit2.team.id)
					return;

				if (unit2.died)
					return;

				if (unitPosition.distanceTo(unit2.position) > unitVisionRange)
					return;

				if (seenUnitsByTeam[unitTeamId].includes(unit2))
					return;

				seenUnitsByTeam[unitTeamId].push(unit2);
			});
		});

		// leaves the vision
		for (let teamId in this.lastSeenUnitsByTeam) {
			let teamUnits = this.lastSeenUnitsByTeam[teamId];

			if (!Server.teams[teamId])
				continue;

			seenUnitsByTeam[teamId] = seenUnitsByTeam[teamId] || [];

			teamUnits.forEach(unit => {
				if (seenUnitsByTeam[teamId].includes(unit))
					return;

				Server.teams[teamId].vision(unit, false);
			});
		}

		// enters the vision
		for (let teamId in seenUnitsByTeam) {
			let teamUnits = seenUnitsByTeam[teamId];

			if (!Server.teams[teamId])
				continue;

			this.lastSeenUnitsByTeam[teamId] = this.lastSeenUnitsByTeam[teamId] || [];

			teamUnits.forEach(unit => {
				if (this.lastSeenUnitsByTeam[teamId].includes(unit))
					return;

				Server.teams[teamId].vision(unit, true);
			});
		}

		this.lastSeenUnitsByTeam = seenUnitsByTeam;
	}

	/**
	 * Actually move unit  
	 * returns {boolean} hasMoved
	 */
	move(unit: IMovingObject, diff: number) {
		//if (unit.waypointsHalt)
		//	return false;

		//console.log('move', unit.netId, unitWaypoints[0]);

		let unitWaypoints = unit.moving.waypoints;
		if (!unitWaypoints)
			return false;

		unit.moving.sendWaypoints(unitWaypoints);

		let nextWaypoint = unitWaypoints[0];
		if (!nextWaypoint)
			return false;

		let unitPosition = unit.position;

		let moveSpeed = (unit.moving.speedParams?.pathSpeedOverride || unit.stats.moveSpeed.total) / 1000;
		let moveDistance = moveSpeed * diff;

		let remainingDistance = moveDistance;
		let nextWaypointDistance = unitPosition.distanceTo(nextWaypoint);

		if (remainingDistance >= nextWaypointDistance) {
			unitPosition.copy(nextWaypoint);
			unitWaypoints.shift();
			nextWaypoint = unitWaypoints[0];
			remainingDistance -= nextWaypointDistance;
		}

		if (!nextWaypoint || remainingDistance <= 0)
			return true;

		let direction = nextWaypoint.clone().sub(unitPosition).normalize();
		unitPosition.add(direction.multiplyScalar(remainingDistance));
		return true;
	}

	/**
	 * Called if unit has moved to call unit movement callbacks
	 */
	callbacks(unit: IMovingObject, diff: number) {

		let unitWaypoints = unit.moving.waypoints;
		if (unitWaypoints.length < 1) {
			unit.eventEmitter.emit('reachDestination');
		}

		//@todo change callbacks to events
		let unitCallbacks = unit.callbacks;
		if (!unitCallbacks)
			return false;

		let unitPosition = unit.position;

		for (let i in unitCallbacks.move) {
			let callback = unitCallbacks.move[i];
			if (unitWaypoints.length < 1 || unitPosition.distanceTo(unitWaypoints[0]) <= callback.options.range)
				callback.function();
		}

		for (let i in unitCallbacks.collision) {
			let callback = unitCallbacks.collision[i];
			let collisionRadius = callback.options?.range || unit.collisionRadius;
			//@todo flags like self targetable, ally targetable, enemy targetable
			//callback.options.flags;

			let units = UnitList.getUnits();
			for (let j = 0, l = units.length; j < l; j++) {
				let unit2 = units[j];

				//@todo
				if (!unit2)
					continue;

				if (!unit2.position)
					continue;

				//@todo for better performance we could divide units array to territories
				let dist2 = unitPosition.distanceTo(unit2.position);
				if (dist2 <= (collisionRadius + unit2.collisionRadius)) {
					callback.function(unit2);

					// if callback has been removed
					if (!unitCallbacks.collision[i])
						break;
				}
			}
		}

		return true;
	}

	/**
	 * Get unit elapsed time in ms since last movement update
	 */
	unitDiff(unit: IMovingObject) {
		let now = performance.now();
		if (!unit.moving.moveTime) {
			unit.moving.moveTime = now;
			return 0;
		}

		let diff = now - unit.moving.moveTime;
		unit.moving.moveTime = now;
		return diff;
	}

	moved: { [n: number]: boolean; } = {};

	/**
	 * Movement main loop for units to make them move on server side
	 */
	async update() {
		for (; ;) {
			await Promise.delay(20);//lower this?
			this.moved = {};

			// @todo: get only movable units
			let units = UnitList.getUnits() as IMovingUnit[];
			units.forEach(unit => {
				if (!unit.moving)
					return;

				let diff = this.unitDiff(unit);
				let moved = this.move(unit, diff);
				if (moved)
					this.callbacks(unit, diff);
				this.moved[unit.netId] = moved;
			});

			let missiles = UnitList.missiles;
			missiles.forEach(missile => {
				//if (!missile.moving)
				//	return;

				let diff = this.unitDiff(missile);
				//todo: flags like collidable with terrain, with ally units, with enemy units
				let moved = this.move(missile, diff);
				if (moved)
					this.callbacks(missile, diff);
				//this.moved[missile.netId] = moved;
			});

			this.visionProcess();

		}
	}
	async start() {

		this.update();
	}
}