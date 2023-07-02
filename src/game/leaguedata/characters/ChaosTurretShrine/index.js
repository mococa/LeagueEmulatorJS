
const slotId = require('../../../../constants/slotId');
const _Turret_Fountain = require('../_Turret_Fountain');


module.exports = class ChaosTurretShrine extends _Turret_Fountain {

	static spells = {
		ChaosTurretShrineBasicAttack: require("./spells/ChaosTurretShrineBasicAttack"),
	};

	constructor(parent) {
		super(parent);

		this.createOnSlots({
			[slotId.A]: this.constructor.spells.ChaosTurretShrineBasicAttack,
		});
	}
};