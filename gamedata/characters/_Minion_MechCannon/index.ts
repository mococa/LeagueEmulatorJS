
import { SlotId } from '@workspace/gameserver/src/constants/slot-id';
import _Minion from '@workspace/gameserver/src/game/datamethods/characters/_Minion';
import package1 from './package';
//import BasicAttack from './spells/BasicAttack';


/**
 * @abstract
 */
export default class _Minion_MechCannon extends _Minion {
	static package = package1;

	static reward = {
		gold: 40,
		exp: 92,
	};
	static rewardPerLevel = {
		gold: 1,
		exp: 0,
	};

	static stats = {
		health: {
			baseValue: 700,
			perLevel: 27,
		},
		healthRegen: 0,
		mana: 0,
		manaRegen: 0,
		attackDamage: {
			baseValue: 40,
			perLevel: 3,
		},
		attackSpeed: 1,
		attackSpeedOffset: 0,
		crit: 0,
		attackRange: 450,
		armor: {
			baseValue: 15,
			perLevel: 3,
		},
		resist: {
			baseValue: 0,
			perLevel: 3,
		},
		moveSpeed: 325,

		collisionRadius: 65,
	};

	static spells = {
		//BasicAttack,
	};

	constructor(parent) {
		super(parent);

		this.createOnSlots({
			[SlotId.A]: this.constructor.spells.BasicAttack,
		});
	}
}