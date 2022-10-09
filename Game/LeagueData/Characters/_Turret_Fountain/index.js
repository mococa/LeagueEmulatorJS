const _Turret = require('../../../DataMethods/Characters/_Turret');

/**
 * @abstract
 */
module.exports = class _Turret_Fountain extends _Turret {
	static package = require('./package');

	static reward = {
		globalGold: 100,
		globalExp: 400,
	};

	static stats = {
		health: 9999,
		healthRegen: 0,
		mana: 0,
		manaRegen: 0,
		attackDamage: 999,
		abilityPower: 0,
		attackSpeed: 1.6,
		attackSpeedOffset: 0,
		crit: 0,
		attackRange: 1250,
		armor: 0,
		resist: 0,
		moveSpeed: 0,
	};

};