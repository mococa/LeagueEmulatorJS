module.exports = {
	0x00: require('./0x00-KEY_CHECK'),
	0x05: require('./0x05-TutorialAudioEventFinished'),
	0x08: require('./0x08-SynchSimTime'),
	0x09: require('./0x09-RemoveItemReq'),
	0x0A: require('./0x0A-ResumePacket'),
	0x14: require('./0x14-QueryStatusReq'),
	0x16: require('./0x16-Ping_Load_Info'),
	0x1D: require('./0x1D-WriteNavFlags_Acc'),
	0x20: require('./0x20-SwapItemReq'),
	0x2E: require('./0x2E-World_SendCamera_Server'),
	0x39: require('./0x39-UpgradeSpellReq'),
	0x3A: require('./0x3A-UseObject'),
	0x47: require('./0x47-UpdateGameOptions'),
	0x48: require('./0x48-PlayEmote'),
	0x49: require('./0x49-PlayVOCommand'),
	0x4B: require('./0x4B-OnScoreBoardOpened'),
	0x52: require('./0x52-ClientReady'),
	0x56: require('./0x56-StatsUpdateReq'),
	0x57: require('./0x57-MapPing'),
	0x5D: require('./0x5D-OnShopOpened'),
	0x64: require('./0x64-RequestJoinTeam'),
	0x68: require('./0x68-Chat'),
	0x6D: require('./0x6D-OnTipEvent'),
	0x72: require('./0x72-IssueOrderReq'),
	0x77: require('./0x77-Waypoint_Acc'),
	0x81: require('./0x81-World_LockCamera_Server'),
	0x82: require('./0x82-BuyItemReq'),
	0x8D: require('./0x8D-ClientFinished'),
	0x8F: require('./0x8F-Exit'),
	0x92: require('./0x92-World_SendGameNumber'),
	0x9A: require('./0x9A-CastSpellReq'),
	0x9C: require('./0x9C-SoftReconnect'),
	0xA1: require('./0xA1-PausePacket'),
	0xA4: require('./0xA4-TeamSurrenderVote'),
	0xA8: require('./0xA8-OnReplication_Acc'),
	0xAF: require('./0xAF-SendSelectedObjId'),
	0xBD: require('./0xBD-SynchVersion'),
	0xBE: require('./0xBE-CharSelected'),
	0xCC: require('./0xCC-OnTutorialPopupClosed'),
	0xCD: require('./0xCD-OnQuestEvent'),
	0xD6: require('./0xD6-OnRespawnPointEvent'),
	0xE6: require('./0xE6-SpellChargeUpdateReq'),
	0xEA: require('./0xEA-SpectatorDataReq'),
	0xF4: require('./0xF4-PlayContextualEmote'),
	0xFB: require('./0xFB-TeamBalanceVote'),
	0x0106: require('./0x0106-UnitSendDrawPath'),
	0x010A: require('./0x010A-UndoItemReq'),
	0x011B: require('./0x011B-CheatLogGoldSources'),
};