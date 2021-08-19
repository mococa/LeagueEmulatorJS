var BasePacket = require('../BasePacket');
var Vector3 = require('../SharedStruct/Vector3');
var Vector3b = require('../SharedStruct/Vector3b');


var FXCreateData = {
    TargetNetID: 'uint32',
    NetAssignedNetID: 'uint32',
    CasterNetID: 'uint32',
    BindNetID: 'uint32',
    KeywordNetID: 'uint32',
    Position: Vector3b,
    TargetPosition: Vector3b,
    OwnerPosition: Vector3b,
    OrientationVector: Vector3,
    TimeSpent: 'float',
    ScriptScale: 'float',
};
var FXCreateGroupData = {
    PackageHash: 'uint32',
    EffectNameHash: 'uint32',
    Flags: 'uint16',
    TargetBoneNameHash: 'uint32',
    BoneNameHash: 'uint32',
    count: 'uint8',
    FXCreateData: [FXCreateData, 1],//'count'
};

module.exports = class extends BasePacket {//S2C.
	struct = {
		count: 'uint8',
		//FXCreateGroupData: [FXCreateGroupData, 1],//'count'
	}
    reader(buffer){
        super.reader(buffer);

        this.FXCreateGroupData = buffer.readobj([FXCreateGroupData, this.count]);
    }
    writer(buffer){
        this.count = this.count || this.FXCreateGroupData.length;
        super.writer(buffer);

        buffer.writeobj([FXCreateGroupData, this.count], this.FXCreateGroupData);
    }
};
