
module.exports = (player, packet) => {
    console.log('handle: C2S.BuyItemReq');
	//console.log(packet);

	player.buyItem(packet.itemId);
};
