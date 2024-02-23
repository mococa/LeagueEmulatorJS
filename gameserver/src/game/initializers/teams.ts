
import * as packets from '@workspace/packets/packages/packets';
import Server from '../../app/server';
import UnitList from '../../app/unit-list';
import loadingStages from '../../constants/loading-stages';
import Team, { TeamId } from '../../gameobjects/extensions/traits/team';
import Player from '../../gameobjects/units/player';
import Unit from '../../gameobjects/units/unit';
import { PacketMessage } from '@workspace/network/packages/packets/packet';


export default class Teams {
	team;

	constructor(team: TeamId) {
		this.team = team;
	}

	static createAll() {
		Server.teams[TeamId.order] = new Teams(TeamId.order);
		Server.teams[TeamId.chaos] = new Teams(TeamId.chaos);
		Server.teams[TeamId.neutral] = new Teams(TeamId.neutral);
		Server.teams[TeamId.max] = new Teams(TeamId.max);
	}

	static initialize() {
		Teams.createAll();
	}

	sendPacket_withVision(packet: PacketMessage | undefined, minStage = loadingStages.inGame) {
		//todo
		this.sendPacket(packet, minStage);
	}

	sendPacketTo(players: Player[], packet: PacketMessage) {
		if (players.length < 1)
			return;

		let peers = players.map(player => player.network.peerNum);
		peers = peers.filter(peer => peer >= 0);

		Server.network.sendPacket(peers, packet);
	}

	sendPacket(packet: PacketMessage | undefined, minStage = loadingStages.inGame) {
		if (!packet)
			return;

		let players = [];
		let teamPlayerUnits = UnitList.getUnitsF(this.team, 'Player') as Player[];
		for (let i = 0, l = teamPlayerUnits.length; i < l; i++) {
			let player = teamPlayerUnits[i];

			if (!player.network)
				continue;
			if (player.network.loadingStage < minStage)
				continue;

			//if(typeof player.network.peerNum === 'undefined'){
			//	//let cPacket = JSON.parse(JSON.stringify(packet));
			//	//player.storePacket(cPacket);
			//	continue;
			//}

			players.push(player);
		}

		this.sendPacketTo(players, packet);
	}

	showUnit(unit: Unit) {
		const packet1 = packets.OnEnterVisibilityClient.create({
			netId: unit.netId,
			shieldValues: {
				magical: 0,
				physical: 0,
				magicalAndPhysical: 0,
			},
			lookAtPosition: { x: 1, y: 0, z: 0 },
			characterStackData: [{
				skinName: unit.character.model,
			}],
			movementData: unit.moving?.movementData,
		});
		this.sendPacket(packet1);
		//console.log(packet1);
	}

	hideUnit(unit: Unit) {
		const packet1 = packets.OnLeaveVisibilityClient.create({
			netId: unit.netId,
		});
		this.sendPacket(packet1);
	}

	vision(target: Unit, enters = true) {
		if (target.type == 'Nexus' || target.type == 'Inhibitor' || target.type == 'Turret')
			return;

		//console.log('vision', target);
		if (enters) {
			console.debug('enters vision', this.team, target.constructor.name, target.netId);
			this.showUnit(target);
		} else {
			console.debug('leaves vision', this.team, target.constructor.name, target.netId);
			this.hideUnit(target);
		}

	}
}
