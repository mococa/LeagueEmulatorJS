
import { SlotId } from '@workspace/gameserver/src/constants/slot-id';
import _Monster from '@workspace/gameserver/src/game/datamethods/characters/_Monster';
import package1 from './package';
import BasicAttack from './spells/BasicAttack';


export default class Wraith extends _Monster {
	static package = package1;

	static reward = {
		gold: 35,
		exp: 90,
	};
	static rewardPerLevel = {
		gold: 0.47,
		exp: 0,
	};

	static stats = {
		health: {
			baseValue: 1000,
			perLevel: 0,
		},
		healthRegen: 0,
		mana: 0,
		manaRegen: 0,
		attackDamage: {
			baseValue: 35,
			perLevel: 0,
		},
		abilityPower: 0,
		attackSpeed: 0.638,
		attackSpeedOffset: 0,
		crit: 0,
		attackRange: 300,
		armor: {
			baseValue: 15,
			perLevel: 0,
		},
		resist: {
			baseValue: 0,
			perLevel: 0,
		},
		moveSpeed: 330,

		collisionRadius: 48,
	};

	static spells = {
		BasicAttack,
	};

	constructor(parent) {
		super(parent);

		this.createOnSlots({
			[SlotId.A]: this.constructor.spells.BasicAttack,
		});
	}
}