
const slotId = require('../../../../constants/slotId');
const _Turret_Inner = require('../_Turret_Inner');


module.exports = class ChaosTurretWorm2 extends _Turret_Inner {

	static spells = {
		ChaosTurretWorm2BasicAttack: require("./spells/ChaosTurretWorm2BasicAttack"),
	};

	constructor(parent) {
		super(parent);

		this.createOnSlots({
			[slotId.A]: this.constructor.spells.ChaosTurretWorm2BasicAttack,
		});
	}
};