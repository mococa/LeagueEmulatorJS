var Unit = require('../Unit');
const {createPacket, sendPacket} = require("../../../Core/PacketUtilities");
const loadingStages = require("../../../Constants/loadingStages");
const { Vector2 } = require('three');
const Vector3b = require('../../../Packets/SharedStruct/Vector3b');
const CharactersTurrets = require('../../League/Characters/Turrets');
const SpellSlot = require('../../../Constants/SpellSlot');

const Turrets = {
	BLUE: {
		Turret_T1_R_03_A: {position: {x: 10097.618, y:   808.733}},
		Turret_T1_R_02_A: {position: {x:  6512.527, y:  1262.615}},
		Turret_T1_C_07_A: {position: {x:  3747.255, y:  1041.044}},

		Turret_T1_C_05_A: {position: {x:  5448.357, y:  6169.100}},
		Turret_T1_C_04_A: {position: {x:  4656.998, y:  4591.909}},
		Turret_T1_C_03_A: {position: {x:  3233.994, y:  3447.242}},
		Turret_T1_C_01_A: {position: {x:  1341.633, y:  2029.984}},
		Turret_T1_C_02_A: {position: {x:  1768.192, y:  1589.465}},

		Turret_OrderTurretShrine_A: {position: {x: -236.047, y: -53.322}},
			
		Turret_T1_L_03_A: {position: {x:   574.655, y: 10220.471}},
		Turret_T1_L_02_A: {position: {x:  1106.263, y:  6465.252}},
		Turret_T1_C_06_A: {position: {x:   802.810, y:  4052.360}},
	},
	RED: {
		Turret_T2_R_03_A: {position: {x: 13459.614, y: 4284.239}},
		Turret_T2_R_02_A: {position: {x: 12920.789, y: 8005.292}},
		Turret_T2_R_01_A: {position: {x: 13205.825, y: 10474.619}},

		Turret_T2_C_05_A: {position: {x:  8548.805, y:  8289.496}},
		Turret_T2_C_04_A: {position: {x:  9361.072, y:  9892.624}},
		Turret_T2_C_03_A: {position: {x: 10743.581, y: 11010.062}},
		Turret_T2_C_01_A: {position: {x: 12662.488, y: 12442.701}},
		Turret_T2_C_02_A: {position: {x: 12118.147, y: 12876.629}},

		Turret_ChaosTurretShrine_A: {position: {x: 14157.025, y: 14456.353}},

		Turret_T2_L_03_A: {position: {x:  3911.675, y: 13654.815}},
		Turret_T2_L_02_A: {position: {x:  7536.523, y: 13190.815}},
		Turret_T2_L_01_A: {position: {x: 10261.900, y: 13465.911}},
	}
};


class Turret extends Unit {

	constructor(team, num = 0, character = '', config = {}){
		super(team, num, character, config);
		
		this.character = CharactersTurrets.create(this, config.characterName || character || this.constructor.name);
		this.initialized();
	}
	spawn(){
		let pos = Turrets[this.info.team][this.character.modelName].position;
		this.spawnPosition = new Vector2(pos.x, pos.y);
		
		var TURRET_SPAWN = createPacket('TURRET_SPAWN', 'S2C');
		TURRET_SPAWN.netId = this.netId;
		TURRET_SPAWN.NetId = this.netId;
		TURRET_SPAWN.NetNodeID = 0x40;
		TURRET_SPAWN.Name = this.character.modelName;
		TURRET_SPAWN.bitfield = {
			IsTargetable: true,
		};
		TURRET_SPAWN.IsTargetableToTeamSpellFlags = 0x01800000;
		this.packetController.sendTo_everyone(TURRET_SPAWN, loadingStages.NOT_CONNECTED);

		super.spawn();
	}
	static spawnAll(){
		//return;
		for(let team in Turrets){
			let i = 0;
			for(let name in Turrets[team])
				new Turret(team, i++, name);
		}
	}
	SET_HEALTH(){
		var SET_HEALTH = createPacket('SET_HEALTH');
		SET_HEALTH.netId = this.netId;
		SET_HEALTH.count = 0;
		SET_HEALTH.MaxHealth = this.stats.HealthPoints.Total;
		SET_HEALTH.Health = this.stats.CurrentHealth;
		this.packetController.sendTo_everyone(SET_HEALTH, loadingStages.NOT_CONNECTED);
	}
	acquisitionRange = 750;

	/**
	 * Get current target if in range
	 * @returns {?Unit}
	 */
	getCurrentTargetIfInRange(){
		return this.target && this.inRange(this.target, this.stats.Range.Total) ? this.target : null;
	}
	/**
	 * Find new target in range, sort by type and distance
	 * @returns {Unit}
	 */
	getNewTarget(){
		var unitsInRange = this.getEnemyUnitsInRange(this.stats.Range.Total);
		if(!unitsInRange.length)
			return null;

		Unit.sortUnitsByDistance(unitsInRange, this.position);
		var targetUnitTypesOrder = ['Minion', 'Player'];
		Unit.sortUnitsByType(unitsInRange, targetUnitTypesOrder);
		return unitsInRange[0];
	}
	/**
	 * Find target to attack or get previous target if still in range
	 * @returns {?Unit}
	 */
	findTarget(){
		var target = this.getCurrentTargetIfInRange();
		if(target)
			return target;

		target = this.getNewTarget();
		if(target)
			return target;

		return null;
	}
	/**
	 * Set target for turret to attack
	 * @param {Unit} target
	 */
	setTarget(target){
		if(this.target === target)
			return;

		this.target = target;
		var SET_TARGET = createPacket('SET_TARGET', 'S2C');
		SET_TARGET.netId = this.netId;
		SET_TARGET.targetNetId = target.netId;
		this.packetController.sendTo_everyone(SET_TARGET);
	}
	//FACE_DIRECTION(){
	//	var FACE_DIRECTION = createPacket('FACE_DIRECTION');
	//	FACE_DIRECTION.netId = this.netId;
	//	FACE_DIRECTION.flags_DoLerpTime = 1;
	//	FACE_DIRECTION.Direction = new Vector3b(-0.93, 0, -0.35);
	//	FACE_DIRECTION.LerpTime = 0.08;
	//	this.packetController.sendTo_everyone(FACE_DIRECTION, loadingStages.NOT_CONNECTED);
	//}
	//DAMAGE_DONE(target, damage){
	//	var DAMAGE_DONE = createPacket('DAMAGE_DONE');
	//	DAMAGE_DONE.netId = this.netId;
	//	DAMAGE_DONE.DamageResultType = 4;
	//	DAMAGE_DONE.dummy = 0;
	//	DAMAGE_DONE.DamageType = 0;
	//	DAMAGE_DONE.Damage = damage;
	//	DAMAGE_DONE.TargetNetId = target.netId;
	//	DAMAGE_DONE.SourceNetId = this.netId;
	//	this.packetController.sendTo_everyone(DAMAGE_DONE, loadingStages.NOT_CONNECTED);
	//}
	/**
	 * Scan for enemy units in range and attack nearest one
	 */
	attackInRange(){
		var target = this.findTarget();
		if(!target)
			return;

		this.setTarget(target);//console.log(this.character.spells.spells[SpellSlot.A]);
		var attackSlot = this.character.spells.spells[SpellSlot.A];
		//var basicattack = attackSlot.attackProcess(target);
		var basicattack = attackSlot.castAttack(target);
		//this.FACE_DIRECTION();
		//this.DAMAGE_DONE(target, 100);
		//attackSlot.turretAttackProjectile(basicattack);
	}

	
	async loop(){
		while(true){
			await global.Utilities.wait(1000);

			//if(!global.Game.loaded)
			//	continue;

			if(this.battle.died)
				break;

			this.attackInRange();
		}

	}
}


module.exports = Turret;