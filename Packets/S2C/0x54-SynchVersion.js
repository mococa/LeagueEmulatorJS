const BasePacket = require('../BasePacket');
var STipConfig = require('../SharedStruct/STipConfig');

var SPlayerInfo = {
	playerId: 'int64',
	summonorLevel: 'uint16',
	summonorSpell1: 'uint32',
	summonorSpell2: 'uint32',
	bitfield: 'uint8',
	teamId: 'uint32',
	botName: ['char', 64],
	botSkinName: ['char', 64],
	eloRanking: ['char', 16],
	botSkinId: 'int32',
	botDifficulty: 'int32',
	profileIconId: 'int32',
	allyBadgeId: 'uint8',
	enemyBadgeId: 'uint8',
};

module.exports = class SynchVersion extends BasePacket {
	static struct = {
		bitfield: ['bitfield', {
			versionMatches: 1,
			writeToClientFile: 2,
			matchedGame: 4,
			dradisInit: 8,
		}],
		mapToLoad: 'int32',
		playerInfo: [SPlayerInfo, 12],
		versionString: ['char', 256],
		mapMode: ['char', 128],
		platformId: ['char', 32],
		mutators: [['char', 64], 8],
		mutatorsNum: 'uint8',
		orderRankedTeamName: ['char', 97],
		orderRankedTeamTag: ['char', 25],
		chaosRankedTeamName: ['char', 97],
		chaosRankedTeamTag: ['char', 25],
		metricsServerWebAddress: ['char', 256],
		metricsServerWebPath: ['char', 256],
		metricsServerPort: 'uint16',
		dradisProdAddress: ['char', 256],
		dradisProdResource: ['char', 256],
		dradisProdPort: 'uint16',
		dradisTestAddress: ['char', 256],
		dradisTestResource: ['char', 256],
		dradisTestPort: 'uint16',
		tipConfig: STipConfig,
		gameFeatures: ['bitfield64', {
			Equalize: 1 << 0,
			FoundryOptions: 1 << 1,
			OldOptions: 1 << 2,
			FoundryQuicChat: 1 << 3,
			EarlyWarningForFOWMissiles: 1 << 4,
			AnimatedCursors: 1 << 5,
			ItemUndo: 1 << 6,
			NewPlayerRecommendedPages: 1 << 7,
			HighlightLineMissileTargets: 1 << 8,
			ControlledChampionIndicator: 1 << 9,
			AlternateBountySystem: 1 << 10,
			NewMinionSpawnOrder: 1 << 11,
			TurretRangeIndicators: 1 << 12,
			GoldSourceInfoLogDump: 1 << 13,
			ParticleSinNameTech: 1 << 14,
			NetworMetrics_1: 1 << 15,
			HardwareMetrics_1: 1 << 16,
			TruLagMetrics: 1 << 17,
			DradisSD: 1 << 18,
			ServerIPLogging: 1 << 19,
			JungleTimers: 1 << 20,
			TraceRouteMetrics: 1 << 21,
			IsLolbug19805LoggingEnabled: 1 << 22,
			IsLolbug19805HacyTourniquetEnabled: 1 << 23,
			TurretMemory: 1 << 24,
			TimerSyncForReplay: 1 << 25,
			RegisterWithLocalServiceDiscovery: 1 << 26,
			MinionFarmingBounty: 1 << 27,
			TeleportToDestroyedTowers: 1 << 28,
			NonRefCountedCharacterStates: 1 << 29,
			unk1: 1 << 30,
		}],
		disabledItems: ['uint32', 64],
		enabledDradisMessages: ['bool', 19],
	}
};
