
import { SlotId } from '@workspace/gameserver/src/constants/slot-id';
import _Turret_Outer from '../_Turret_Outer/index';
import ChaosTurretWormBasicAttack from './spells/ChaosTurretWormBasicAttack';


export default class ChaosTurretWorm extends _Turret_Outer {

	static spells = {
		ChaosTurretWormBasicAttack,
	};

	constructor(parent) {
		super(parent);

		this.createOnSlots({
			[SlotId.A]: this.constructor.spells.ChaosTurretWormBasicAttack,
		});
	}
}