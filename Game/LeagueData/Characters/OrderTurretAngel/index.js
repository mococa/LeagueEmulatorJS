
const slotId = require('../../../../Constants/slotId');
const _Turret_Nexus = require('../_Turret_Nexus');


module.exports = class OrderTurretAngel extends _Turret_Nexus {

	static spells = {
		OrderTurretAngelBasicAttack: require("./Spells/OrderTurretAngelBasicAttack"),
	};

	constructor(parent){
		super(parent);
		
		this.createOnSlots({
			[slotId.A]: this.constructor.spells.OrderTurretAngelBasicAttack,
		});
	}
};