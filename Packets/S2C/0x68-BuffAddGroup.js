const BasePacket = require('../BasePacket');

const SBuffInGroupAdd = {
	ownerNetId: 'uint32',
	casterNetId: 'uint32',
	slot: 'uint8',
	count: 'uint8',
	isHidden: 'uint8',
};


module.exports = class BuffAddGroup extends BasePacket {
	static struct = {
		buffType: 'uint8',
		buffNameHash: 'uint32',
		packageHash: 'uint32',
		runningTime: 'float',
		duration: 'float',
		numInGroup: 'uint8',
	}
	reader(buffer){
		super.reader(buffer);

		this.entries = buffer.readobj([SBuffInGroupAdd, this.numInGroup]);
	}
	writer(buffer){
		//if(!this.entries || !this.entries.length || this.entries.length > 0xFF)
		//	return;

		this.numInGroup = this.entries.length;
		
		super.writer(buffer);

		buffer.writeobj([SBuffInGroupAdd, this.numInGroup], this.entries);
	}
};
