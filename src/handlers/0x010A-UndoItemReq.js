
/**
 * 
 * @param {import('../gameobjects/units/Player')} player 
 * @param {*} packet 
 */
module.exports = (player, packet) => {
	console.log('handle: C2S.UndoItemReq');
	//console.log(packet);

	player.inventory.UndoHistory.remUndoHistory();
};