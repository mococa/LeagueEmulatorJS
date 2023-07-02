const BasePacket = require('../BasePacket');
const SVector3 = require('../sharedstruct/SVector3');
const SCastInfo = require('../sharedstruct/SCastInfo');


module.exports = class MissileReplication extends BasePacket {
	static struct = {
		position: SVector3,
		casterPosition: SVector3,
		direction: SVector3,
		velocity: SVector3,
		startPoint: SVector3,
		endPoint: SVector3,
		unitPosition: SVector3,
		timeFromCreation: 'float',
		speed: 'float',
		lifePercentage: 'float',
		timedSpeedDelta: 'float',
		timedSpeedDeltaTime: 'float',
		bitfield: ['bitfield', {
			bounced: 1,
		}],
	}
	reader(buffer) {
		super.reader(buffer);
		this.castInfo = SCastInfo.reader(buffer);
	}
	writer(buffer) {
		super.writer(buffer);
		SCastInfo.writer(buffer, this.castInfo);
	}
};