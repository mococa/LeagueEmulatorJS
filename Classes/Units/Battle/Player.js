var BattleUnit = require('./Unit');
const { createPacket } = require('../../../PacketUtilities');
const pANNOUNCE2 = require("../../../Packets/S2C/0xA3-ANNOUNCE2");


class BattlePlayer extends BattleUnit {

	async onDie(source){
		var ANNOUNCE2 = createPacket('ANNOUNCE2');
		ANNOUNCE2.netId = this.parent.netId;
		ANNOUNCE2.id = pANNOUNCE2.ids.DEATH;
		ANNOUNCE2.killerNetId = source.parent.netId;
		var isSent = global.Teams.ALL.sendPacket(ANNOUNCE2);

		if(!this.died)
			return console.log('[weird] died but not died?');

		this.parent.death.lastRespawnTime = this.parent.death.respawnTime || false;

		if(this.parent.death.lastRespawnTime === false)
			return;

		this.parent.death.totalRespawnTime += this.parent.death.lastRespawnTime;
		while(this.died + this.parent.death.lastRespawnTime < Date.now() / 1000){
			await global.Utilities.wait(100);
			continue;
		}

		this.parent.respawn();
	}

}


module.exports = BattlePlayer;
