
import Player from '../gameobjects/units/player';
import * as packets from '@workspace/packets/packages/packets';


export default (player: Player, packet: packets.UndoItemReqModel) => {
	console.log('handle: c2s.UndoItemReq');
	//console.log(packet);

	player.inventory.UndoHistory.remUndoHistory();
};
