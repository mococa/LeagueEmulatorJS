
const slotId = require("../../../../Constants/slotId");
const _Monster = require("../../../DataMethods/Characters/_Monster");


module.exports = class SmallGolem extends _Monster {
	static package = require('./package');

	static reward = {
		gold: 15,
		exp: 40,
	};
	static rewardPerLevel = {
		gold: 0.23,
		exp: 0.58,
	};

	static stats = {
		health: {
			baseValue: 450,
			perLevel: 37,
		},
		healthRegen: 0,
		mana: 0,
		manaRegen: 0,
		attackDamage: {
			baseValue: 30,
			perLevel: 1.3,
		},
		abilityPower: 0,
		attackSpeed: 0.613,
		attackSpeedOffset: 0,
		crit: 0,
		attackRange: 150,
		armor: {
			baseValue: 12,
			perLevel: 0,
		},
		resist: {
			baseValue: -10,
			perLevel: 0,
		},
		moveSpeed: 350,

		collisionRadius: 48,
	};

	static spells = {
		BasicAttack: require('./Spells/BasicAttack'),
	};

	constructor(parent){
		super(parent);
		
		this.createOnSlots({
			[slotId.A]: this.constructor.spells.BasicAttack,
		});
	}
};
