
import Player from '../gameobjects/units/player';
import * as packets from '@repo/packets/list';


export default (player: Player, packet: packets.SendSelectedObjIdModel) => {
	console.log('handle: c2s.SendSelectedObjId');
	//console.log(packet);


};