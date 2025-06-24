import { PlatformId } from "@ballaual/riot-rate-limiter";
import { RedisOptions } from "ioredis";
export type Leaves<T> = T extends object ? {
    [K in keyof T]: `${Exclude<K, symbol>}${Leaves<T[K]> extends never ? "" : `.${Leaves<T[K]>}`}`;
}[keyof T] : never;
export declare namespace RiotAPITypes {
    interface Config {
        debug?: boolean;
        cache?: {
            cacheType: "local" | "ioredis";
            client?: RedisOptions | string;
            ttls?: {
                byMethod: {
                    [key: string]: number;
                };
            };
        };
    }
    interface RequestOptions {
        id: string;
        priority?: number;
        expiration?: number;
        params?: {
            [key: string]: string | number | number[] | undefined;
        };
        body?: object;
        method?: "POST" | "GET" | "PUT";
        headers?: {
            [key: string]: string;
        };
    }
    enum QUEUE {
        RANKED_SOLO_5x5 = "RANKED_SOLO_5x5",
        RANKED_TFT = "RANKED_TFT",
        RANKED_FLEX_SR = "RANKED_FLEX_SR",
        RANKED_FLEX_TT = "RANKED_FLEX_TT"
    }
    enum TIER {
        CHALLENGER = "CHALLENGER",
        GRANDMASTER = "GRANDMASTER",
        MASTER = "MASTER",
        DIAMOND = "DIAMOND",
        EMERALD = "EMERALD",
        PLATINUM = "PLATINUM",
        GOLD = "GOLD",
        SILVER = "SILVER",
        BRONZE = "BRONZE",
        IRON = "IRON"
    }
    enum TFT_TIER {
        DIAMOND = "DIAMOND",
        PLATINUM = "PLATINUM",
        GOLD = "GOLD",
        SILVER = "SILVER",
        BRONZE = "BRONZE",
        IRON = "IRON"
    }
    enum DIVISION {
        I = "I",
        II = "II",
        III = "III",
        IV = "IV"
    }
    enum VAL_QUEUE {
        COMPETITIVE = "competitive",
        UNRATED = "unrated",
        SPIKERUSH = "spikerush",
        TOURNAMENTMODE = "tournamentmode",
        DEATHMATCH = "deathmatch",
        ONEFA = "onefa",
        GGTEAM = "ggteam"
    }
    type VALCluster = PlatformId.AP | PlatformId.BR | PlatformId.EU | PlatformId.KR | PlatformId.LATAM | PlatformId.NA | PlatformId.ESPORTS;
    type LORCluster = PlatformId.AMERICAS | PlatformId.ASIA | PlatformId.EUROPE | PlatformId.SEA | PlatformId.APAC;
    type TFTCluster = PlatformId.AMERICAS | PlatformId.ASIA | PlatformId.EUROPE | PlatformId.SEA;
    type Cluster = PlatformId.EUROPE | PlatformId.AMERICAS | PlatformId.ASIA | PlatformId.SEA | PlatformId.ESPORTS;
    type LoLRegion = PlatformId.BR1 | PlatformId.EUNE1 | PlatformId.EUW1 | PlatformId.JP1 | PlatformId.KR | PlatformId.LA1 | PlatformId.LA2 | PlatformId.NA1 | PlatformId.OC1 | PlatformId.RU | PlatformId.TR1 | PlatformId.PH2 | PlatformId.SG2 | PlatformId.TH2 | PlatformId.TW2 | PlatformId.VN2;
    namespace METHOD_KEY {
        namespace ACCOUNT_V1 {
            const GET_BY_PUUID = "ACCOUNT_V1.GET_BY_PUUID";
            const GET_BY_RIOT_ID = "ACCOUNT_V1.GET_BY_RIOT_ID";
            const GET_BY_ACCESS_TOKEN = "ACCOUNT_V1.GET_BY_ACCESS_TOKEN";
            const GET_ACTIVE_SHARD_FOR_PLAYER = "ACCOUNT_V1.GET_ACTIVE_SHARD_FOR_PLAYER";
        }
        namespace CHAMPION_MASTERY_V4 {
            const GET_ALL_CHAMPIONS = "CHAMPION_MASTERY_V4.GET_ALL_CHAMPIONS";
            const GET_CHAMPION_MASTERY = "CHAMPION_MASTERY_V4.GET_CHAMPION_MASTERY";
            const GET_TOP_CHAMPIONS = "CHAMPION_MASTERY_V4.GET_TOP_CHAMPIONS";
            const GET_CHAMPION_MASTERY_SCORE = "CHAMPION_MASTERY_V4.GET_CHAMPION_MASTERY_SCORE";
        }
        namespace CHAMPION_V3 {
            const GET_CHAMPION_ROTATIONS = "CHAMPION_V3.GET_CHAMPION_ROTATIONS";
        }
        namespace CLASH_V1 {
            const GET_PLAYERS_BY_PUUID = "CLASH_V1.GET_PLAYERS_BY_PUUID";
            const GET_TEAM = "CLASH_V1.GET_TEAM";
            const GET_TOURNAMENTS = "CLASH_V1.GET_TOURNAMENTS";
            const GET_TOURNAMENT = "CLASH_V1.GET_TOURNAMENT";
            const GET_TOURNAMENT_TEAM = "CLASH_V1.GET_TOURNAMENT_TEAM";
        }
        namespace LEAGUE_EXP_V4 {
            const GET_LEAGUE_ENTRIES = "LEAGUE_EXP_V4.GET_LEAGUE_ENTRIES";
        }
        namespace LEAGUE_V4 {
            const GET_CHALLENGER_BY_QUEUE = "LEAGUE_V4.GET_CHALLENGER_BY_QUEUE";
            const GET_ENTRIES_BY_PUUID = "LEAGUE_V4.GET_ENTRIES_BY_PUUID";
            const GET_ALL_ENTRIES = "LEAGUE_V4.GET_ALL_ENTRIES";
            const GET_GRANDMASTER_BY_QUEUE = "LEAGUE_V4.GET_GRANDMASTER_BY_QUEUE";
            const GET_LEAGUE_BY_ID = "LEAGUE_V4.GET_LEAGUE_BY_ID";
            const GET_MASTER_BY_QUEUE = "LEAGUE_V4.GET_MASTER_BY_QUEUE";
        }
        namespace LOL_CHALLENGES_V1 {
            const GET_CONFIG = "LOL_CHALLENGES_V1.GET_CONFIG";
            const GET_PERCENTILES = "LOL_CHALLENGES_V1.GET_PERCENTILES";
            const GET_CONFIG_BY_ID = "LOL_CHALLENGES_V1.GET_CONFIG_BY_ID";
            const GET_LEADERBOARD_BY_ID = "LOL_CHALLENGES_V1.GET_LEADERBOARD_BY_ID";
            const GET_PERCENTILES_BY_ID = "LOL_CHALLENGES_V1.GET_PERCENTILES_BY_ID";
            const GET_PLAYER_DATA_BY_PUUID = "LOL_CHALLENGES_V1.GET_PLAYER_DATA_BY_PUUID";
        }
        namespace LOL_RSO_MATCH_V1 {
            const GET_IDS_BY_ACCESS_TOKEN = "LOL_RSO_MATCH_V1.GET_IDS_BY_ACCESS_TOKEN";
            const GET_MATCH_BY_ID = "LOL_RSO_MATCH_V1.GET_MATCH_BY_ID";
            const GET_MATCH_TIMELINE_BY_ID = "LOL_RSO_MATCH_V1.GET_MATCH_TIMELINE_BY_ID";
        }
        namespace LOL_STATUS_V4 {
            const GET_PLATFORM_DATA = "LOL_STATUS_V4.GET_PLATFORM_DATA";
        }
        namespace LOR_DECK_V1 {
            const GET_DECKS_FOR_PLAYER = "LOR_DECK_V1.GET_DECKS_FOR_PLAYER";
            const POST_CREATE_DECK_FOR_PLAYER = "LOR_DECK_V1.POST_CREATE_DECK_FOR_PLAYER";
        }
        namespace LOR_INVENTORY_V1 {
            const GET_CARDS_OWNED_BY_PLAYER = "LOR_INVENTORY_V1.GET_CARDS_OWNED_BY_PLAYER";
        }
        namespace LOR_MATCH_V1 {
            const GET_MATCH_IDS_BY_PUUID = "LOR_MATCH_V1.GET_MATCH_IDS_BY_PUUID";
            const GET_MATCH_BY_ID = "LOR_MATCH_V1.GET_MATCH_BY_ID";
        }
        namespace LOR_RANKED_V1 {
            const GET_MASTER_TIER = "LOR_RANKED_V1.GET_MASTER_TIER";
        }
        namespace LOR_STATUS_V1 {
            const GET_PLATFORM_DATA = "LOR_STATUS_V1.GET_PLATFORM_DATA";
        }
        namespace MATCH_V5 {
            const GET_IDS_BY_PUUID = "MATCH_V5.GET_IDS_BY_PUUID";
            const GET_MATCH_BY_ID = "MATCH_V5.GET_MATCH_BY_ID";
            const GET_MATCH_TIMELINE_BY_ID = "MATCH_V5.GET_MATCH_TIMELINE_BY_ID";
        }
        namespace SPECTATOR_TFT_V5 {
            const GET_GAME_BY_PUUID = "SPECTATOR_TFT_V5.GET_GAME_BY_PUUID";
            const GET_FEATURED_GAMES = "SPECTATOR_TFT_V5.GET_FEATURED_GAMES";
        }
        namespace SPECTATOR_V5 {
            const GET_GAME_BY_SUMMONER_ID = "SPECTATOR_V5.GET_GAME_BY_SUMMONER_ID";
            const GET_FEATURED_GAMES = "SPECTATOR_V5.GET_FEATURED_GAMES";
        }
        namespace SUMMONER_V4 {
            const GET_BY_RSO_PUUID = "SUMMONER_V4.GET_BY_RSO_PUUID";
            const GET_BY_ACCOUNT_ID = "SUMMONER_V4.GET_BY_ACCOUNT_ID";
            const GET_BY_PUUID = "SUMMONER_V4.GET_BY_PUUID";
            const GET_BY_SUMMONER_ID = "SUMMONER_V4.GET_BY_SUMMONER_ID";
            const GET_BY_ACCESS_TOKEN = "SUMMONER_V4.GET_BY_ACCESS_TOKEN";
        }
        namespace TFT_LEAGUE_V1 {
            const GET_CHALLENGER = "TFT_LEAGUE_V1.GET_CHALLENGER";
            const GET_ENTRIES_BY_PUUID = "TFT_LEAGUE_V1.GET_ENTRIES_BY_PUUID";
            const GET_ALL_ENTRIES = "TFT_LEAGUE_V1.GET_ALL_ENTRIES";
            const GET_GRANDMASTER = "TFT_LEAGUE_V1.GET_GRANDMASTER";
            const GET_LEAGUE_BY_ID = "TFT_LEAGUE_V1.GET_LEAGUE_BY_ID";
            const GET_MASTER = "TFT_LEAGUE_V1.GET_MASTER";
            const GET_TOP_RATED_LADDER_BY_QUEUE = "TFT_LEAGUE_V1.GET_TOP_RATED_LADDER_BY_QUEUE";
        }
        namespace TFT_MATCH_V1 {
            const GET_MATCH_IDS_BY_PUUID = "TFT_MATCH_V1.GET_MATCH_IDS_BY_PUUID";
            const GET_MATCH_BY_ID = "TFT_MATCH_V1.GET_MATCH_BY_ID";
        }
        namespace TFT_STATUS_V1 {
            const GET_PLATFORM_DATA = "TFT_STATUS_V1.GET_PLATFORM_DATA";
        }
        namespace TFT_SUMMONER_V1 {
            const GET_BY_ACCOUNT_ID = "TFT_SUMMONER_V1.GET_BY_ACCOUNT_ID";
            const GET_BY_ACCESS_TOKEN = "TFT_SUMMONER_V1.GET_BY_ACCESS_TOKEN";
            const GET_BY_PUUID = "TFT_SUMMONER_V1.GET_BY_PUUID";
            const GET_BY_SUMMONER_ID = "TFT_SUMMONER_V1.GET_BY_SUMMONER_ID";
        }
        namespace TOURNAMENT_STUB_V5 {
            const POST_CREATE_CODES = "TOURNAMENT_STUB_V5.POST_CREATE_CODES";
            const GET_TOURNAMENT_BY_CODE = "TOURNAMENT_STUB_V5.GET_TOURNAMENT_BY_CODE";
            const GET_LOBBY_EVENTS_BY_TOURNAMENT_CODE = "TOURNAMENT_STUB_V5.GET_LOBBY_EVENTS_BY_TOURNAMENT_CODE";
            const POST_CREATE_PROVIDER = "TOURNAMENT_STUB_V5.POST_CREATE_PROVIDER";
            const POST_CREATE_TOURNAMENT = "TOURNAMENT_STUB_V5.POST_CREATE_TOURNAMENT";
        }
        namespace TOURNAMENT_V5 {
            const POST_CREATE_CODES = "TOURNAMENT_V5.POST_CREATE_CODES";
            const GET_TOURNAMENT_BY_CODE = "TOURNAMENT_V5.GET_TOURNAMENT_BY_CODE";
            const PUT_TOURNAMENT_CODE = "TOURNAMENT_V5.PUT_TOURNAMENT_CODE";
            const GET_TOURNAMENT_GAME_DETAILS = "TOURNAMENT_V5.GET_TOURNAMENT_GAME_DETAILS";
            const GET_LOBBY_EVENTS_BY_TOURNAMENT_CODE = "TOURNAMENT_V5.GET_LOBBY_EVENTS_BY_TOURNAMENT_CODE";
            const POST_CREATE_PROVIDER = "TOURNAMENT_V5.POST_CREATE_PROVIDER";
            const POST_CREATE_TOURNAMENT = "TOURNAMENT_V5.POST_CREATE_TOURNAMENT";
        }
        namespace VAL_CONSOLE_MATCH_V1 {
            const GET_MATCH_BY_ID = "VAL_CONSOLE_MATCH_V1.GET_MATCH_BY_ID";
            const GET_MATCHLIST_BY_PUUID = "VAL_CONSOLE_MATCH_V1.GET_MATCHLIST_BY_PUUID";
            const GET_RECENT_MATCHES_BY_QUEUE = "VAL_CONSOLE_MATCH_V1.GET_RECENT_MATCHES_BY_QUEUE";
        }
        namespace VAL_CONTENT_V1 {
            const GET_CONTENT = "VAL_CONTENT_V1.GET_CONTENT";
        }
        namespace VAL_CONSOLE_RANKED_V1 {
            const GET_LEADERBOARD_BY_QUEUE = "VAL_CONSOLE_RANKED_V1.GET_LEADERBOARD_BY_QUEUE";
        }
        namespace VAL_MATCH_V1 {
            const GET_MATCH_BY_ID = "VAL_MATCH_V1.GET_MATCH_BY_ID";
            const GET_MATCHLIST_BY_PUUID = "VAL_MATCH_V1.GET_MATCHLIST_BY_PUUID";
            const GET_RECENT_MATCHES_BY_QUEUE = "VAL_MATCH_V1.GET_RECENT_MATCHES_BY_QUEUE";
        }
        namespace VAL_RANKED_V1 {
            const GET_LEADERBOARD_BY_QUEUE = "VAL_RANKED_V1.GET_LEADERBOARD_BY_QUEUE";
        }
        namespace VAL_STATUS_V1 {
            const GET_PLATFORM_DATA = "VAL_STATUS_V1.GET_PLATFORM_DATA";
        }
    }
    namespace Account {
        interface AccountDTO {
            puuid: string;
            gameName?: string;
            tagLine?: string;
        }
        interface ActiveShardDTO {
            puuid: string;
            game: string;
            activeShard: string;
        }
    }
    namespace ChampionMastery {
        interface ChampionMasteryDTO {
            championPointsUntilNextLevel: number;
            chestGranted: boolean;
            championId: number;
            lastPlayTime: number;
            championLevel: number;
            summonerId: string;
            championPoints: number;
            championPointsSinceLastLevel: number;
            tokensEarned: number;
        }
    }
    namespace Champion {
        interface ChampionInfoDTO {
            maxNewPlayerLevel: number;
            freeChampionIdsForNewPlayers: number[];
            freeChampionIds: number[];
        }
    }
    namespace Clash {
        interface PlayerDTO {
            summonerId: string;
            teamId: string;
            position: "UNSELECTED" | "FILL" | "TOP" | "JUNGLE" | "MIDDLE" | "BOTTOM" | "UTILITY";
            role: "CAPTAIN" | "MEMBER";
        }
        interface TeamDTO {
            id: string;
            tournamentId: number;
            name: string;
            iconId: number;
            tier: number;
            captain: string;
            abbreviation: string;
            players: Clash.PlayerDTO[] /** Team members. */;
        }
        interface TournamentPhaseDTO {
            id: number;
            registrationTime: number;
            startTime: number;
            cancelled: boolean;
        }
        interface TournamentDTO {
            id: number;
            themeId: number;
            nameKey: string;
            nameKeySecondary: string;
            schedule: Clash.TournamentPhaseDTO[];
        }
    }
    namespace League {
        interface MiniSeriesDTO {
            losses: number;
            progress: string;
            target: number;
            wins: number;
        }
        interface LeagueEntryDTO {
            leagueId: string;
            summonerId: string;
            queueType: string;
            tier: string;
            rank: string;
            leaguePoints: number;
            wins: number;
            losses: number;
            hotStreak: boolean;
            veteran: boolean;
            freshBlood: boolean;
            inactive: boolean;
            miniSeries?: League.MiniSeriesDTO | null;
        }
        interface LeagueItemDTO {
            freshBlood: boolean;
            wins: number;
            miniSeries?: League.MiniSeriesDTO | null;
            inactive: boolean;
            veteran: boolean;
            hotStreak: boolean;
            rank: string;
            leaguePoints: number;
            losses: number;
            summonerId: string;
        }
        interface LeagueListDTO {
            leagueId: string;
            entries: League.LeagueItemDTO[];
            tier: string;
            name: string;
            queue: string;
        }
    }
    namespace LolChallenges {
        enum lolChallengeState {
            DISABLED = "DISABLED",// Not visible and not calculated
            HIDDEN = "HIDDEN",// visible but calculated
            ENABLED = "ENABLED",// visible and calculated
            ARCHIVED = "ARCHIVED"
        }
        enum lolChallengeTracking {
            LIFETIME = "LIFETIME",// stats are incremented without reset
            SEASON = "SEASON"
        }
        enum lolChallengeCategory {
            VETERANCY = "VETERANCY",
            IMAGINATION = "IMAGINATION",
            COLLECTION = "COLLECTION",
            EXPERTISE = "EXPERTISE",
            TEAMWORK = "TEAMWORK"
        }
        interface ChallengePoints {
            level: TIER;
            current: number;
            max: number;
            percentile: number;
        }
        interface ChallengeInfo {
            challengeId: number;
            percentile: number;
            level: TIER;
            value: number;
            achievedTime: number;
        }
        interface PlayerClientPreferences {
            bannerAccent: string;
            title: string;
            challengeIds: number[];
            crestBorder: string;
            prestigeCrestBorderLevel: number;
        }
        interface ChallengeConfigInfoDTO {
            id: number;
            localizedNames: Record<string, Record<string, string>>;
            state: lolChallengeState;
            tracking: lolChallengeTracking;
            startTimestamp: number;
            endTimestamp: number;
            leaderboard: boolean;
            thresholds: Record<string, number>;
        }
        type ChallengePercentiles = Record<TIER, number>;
        type ChallengePercentilesMap = Record<number, ChallengePercentiles>;
        interface ApexPlayerInfoDTO {
            puuid: string;
            value: number;
            position: number;
        }
        interface PlayerInfoDTO {
            totalPoints: ChallengePoints;
            categoryPoints: Record<lolChallengeCategory, ChallengePoints>;
            challenges: ChallengeInfo[];
            preferences: PlayerClientPreferences;
        }
    }
    namespace LolStatus {
        interface PlatformDataDTO {
            id: string;
            name: string;
            locales: string[];
            maintenances: LolStatus.StatusDTO[];
            incidents: LolStatus.StatusDTO[];
        }
        interface StatusDTO {
            id: number;
            maintenance_status: "scheduled" | "in_progress" | "complete";
            incident_severity: "info" | "warning" | "critical";
            titles: LolStatus.ContentDTO[];
            updates: LolStatus.UpdateDTO[];
            created_at: string;
            archive_at: string;
            updated_at: string;
            platforms: ("windows" | "macos" | "android" | "ios" | "ps4" | "xbone" | "switch")[];
        }
        interface ContentDTO {
            locale: string;
            content: string;
        }
        interface UpdateDTO {
            id: number;
            author: string;
            publish: boolean;
            publish_locations: ("riotclient" | "riotstatus" | "game")[];
            translations: LolStatus.ContentDTO[];
            created_at: string;
            updated_at: string;
        }
    }
    namespace LorDeck {
        interface DeckDTO {
            id: string;
            name: string;
            code: string;
        }
        interface NewDeckDTO {
            name: string;
            code: string;
        }
    }
    namespace LorInventory {
        interface CardDTO {
            code: string;
            count: string;
        }
    }
    namespace LorMatch {
        interface PlayerDTO {
            puuid: string;
            deck_id: string;
            deck_code: string;
            factions: string[];
            game_outcome: string;
            order_of_play: number;
        }
        interface MatchDTO {
            metadata: {
                data_version: string;
                match_id: string;
                participants: string[];
            };
            info: {
                game_mode: "Constructed" | "Expeditions" | "Tutorial";
                game_type: "Ranked" | "Normal" | "AI" | "Tutorial" | "Singleton" | "StandardGauntlet";
                game_start_time_utc: string;
                game_version: string;
                players: LorMatch.PlayerDTO[];
                total_turn_count: number;
            };
        }
    }
    namespace LorRanked {
        interface PlayerDTO {
            name: string;
            rank: number;
            lp: number;
        }
        interface LeaderboardDTO {
            /** A list of players in Master tier. */
            players: LorRanked.PlayerDTO[];
        }
    }
    namespace MatchV5 {
        enum MatchType {
            Ranked = "ranked",
            Normal = "normal",
            Tourney = "tourney",
            Tutorial = "tutorial"
        }
        interface StatPerksDTO {
            defense: number;
            flex: number;
            offense: number;
        }
        interface SelectionDTO {
            perk: number;
            var1: number;
            var2: number;
            var3: number;
        }
        interface StyleDTO {
            description: string;
            selections: SelectionDTO[];
            style: number;
        }
        interface PerksDTO {
            statPerks: StatPerksDTO;
            styles: StyleDTO[];
        }
        interface ChallengesDTO {
            "12AssistStreakCount": number;
            abilityUses: number;
            acesBefore15Minutes: number;
            alliedJungleMonsterKills: number;
            baronBuffGoldAdvantageOverThreshold: number;
            baronTakedowns: number;
            blastConeOppositeOpponentCount: number;
            bountyGold: number;
            buffsStolen: number;
            completeSupportQuestInTime: number;
            controlWardTimeCoverageInRiverOrEnemyHalf: number;
            controlWardsPlaced: number;
            damagePerMinute: number;
            damageTakenOnTeamPercentage: number;
            dancedWithRiftHerald: number;
            deathsByEnemyChamps: number;
            dodgeSkillShotsSmallWindow: number;
            doubleAces: number;
            dragonTakedowns: number;
            earliestBaron: number;
            earlyLaningPhaseGoldExpAdvantage: number;
            effectiveHealAndShielding: number;
            elderDragonKillsWithOpposingSoul: number;
            elderDragonMultikills: number;
            enemyChampionImmobilizations: number;
            enemyJungleMonsterKills: number;
            epicMonsterKillsNearEnemyJungler: number;
            epicMonsterKillsWithin30SecondsOfSpawn: number;
            epicMonsterSteals: number;
            epicMonsterStolenWithoutSmite: number;
            firstTurretKilled: number;
            firstTurretKilledTime: number;
            flawlessAces: number;
            fullTeamTakedown: number;
            gameLength: number;
            getTakedownsInAllLanesEarlyJungleAsLaner: number;
            goldPerMinute: number;
            hadOpenNexus: number;
            immobilizeAndKillWithAlly: number;
            initialBuffCount: number;
            initialCrabCount: number;
            jungleCsBefore10Minutes: number;
            junglerTakedownsNearDamagedEpicMonster: number;
            kTurretsDestroyedBeforePlatesFall: number;
            kda: number;
            killAfterHiddenWithAlly: number;
            killParticipation: number;
            killedChampTookFullTeamDamageSurvived: number;
            killingSprees: number;
            killsNearEnemyTurret: number;
            killsOnOtherLanesEarlyJungleAsLaner: number;
            killsOnRecentlyHealedByAramPack: number;
            killsUnderOwnTurret: number;
            killsWithHelpFromEpicMonster: number;
            knockEnemyIntoTeamAndKill: number;
            landSkillShotsEarlyGame: number;
            laneMinionsFirst10Minutes: number;
            laningPhaseGoldExpAdvantage: number;
            legendaryCount: number;
            legendaryItemUsed: number[];
            lostAnInhibitor: number;
            maxCsAdvantageOnLaneOpponent: number;
            maxKillDeficit: number;
            maxLevelLeadLaneOpponent: number;
            mejaisFullStackInTime: number;
            moreEnemyJungleThanOpponent: number;
            multiKillOneSpell: number;
            multiTurretRiftHeraldCount: number;
            multikills: number;
            multikillsAfterAggressiveFlash: number;
            outerTurretExecutesBefore10Minutes: number;
            outnumberedKills: number;
            outnumberedNexusKill: number;
            perfectDragonSoulsTaken: number;
            perfectGame: number;
            pickKillWithAlly: number;
            playedChampSelectPosition: number;
            poroExplosions: number;
            quickCleanse: number;
            quickFirstTurret: number;
            quickSoloKills: number;
            riftHeraldTakedowns: number;
            saveAllyFromDeath: number;
            scuttleCrabKills: number;
            skillshotsDodged: number;
            skillshotsHit: number;
            snowballsHit: number;
            soloBaronKills: number;
            soloKills: number;
            soloTurretsLategame: number;
            stealthWardsPlaced: number;
            survivedSingleDigitHpCount: number;
            survivedThreeImmobilizesInFight: number;
            takedownOnFirstTurret: number;
            takedowns: number;
            takedownsAfterGainingLevelAdvantage: number;
            takedownsBeforeJungleMinionSpawn: number;
            takedownsFirstXMinutes: number;
            takedownsInAlcove: number;
            takedownsInEnemyFountain: number;
            teamBaronKills: number;
            teamDamagePercentage: number;
            teamElderDragonKills: number;
            teamRiftHeraldKills: number;
            tookLargeDamageSurvived: number;
            turretPlatesTaken: number;
            turretTakedowns: number;
            turretsTakenWithRiftHerald: number;
            twentyMinionsIn3SecondsCount: number;
            twoWardsOneSweeperCount: number;
            unseenRecalls: number;
            visionScoreAdvantageLaneOpponent: number;
            visionScorePerMinute: number;
            wardTakedowns: number;
            wardTakedownsBefore20M: number;
            wardsGuarded: number;
        }
        interface MissionsDTO {
            playerScore0: number;
            playerScore1: number;
            playerScore2: number;
            playerScore3: number;
            playerScore4: number;
            playerScore5: number;
            playerScore6: number;
            playerScore7: number;
            playerScore8: number;
            playerScore9: number;
            playerScore10: number;
            playerScore11: number;
        }
        interface ParticipantDTO {
            allInPings: number;
            assistMePings: number;
            assists: number;
            baronKills: number;
            bountyLevel: number;
            challenges: ChallengesDTO;
            champExperience: number;
            champLevel: number;
            championId: number;
            championName: string;
            championTransform: number;
            commandPings: number;
            consumablesPurchased: number;
            damageDealtToBuildings: number;
            damageDealtToObjectives: number;
            damageDealtToTurrets: number;
            damageSelfMitigated: number;
            deaths: number;
            detectorWardsPlaced: number;
            doubleKills: number;
            dragonKills: number;
            eligibleForProgression: boolean;
            enemyMissingPings: number;
            enemyVisionPings: number;
            firstBloodAssist: boolean;
            firstBloodKill: boolean;
            firstTowerAssist: boolean;
            firstTowerKill: boolean;
            gameEndedInEarlySurrender: boolean;
            gameEndedInSurrender: boolean;
            getBackPings: number;
            goldEarned: number;
            goldSpent: number;
            holdPings: number;
            individualPosition: string;
            inhibitorKills: number;
            inhibitorTakedowns: number;
            inhibitorsLost: number;
            item0: number;
            item1: number;
            item2: number;
            item3: number;
            item4: number;
            item5: number;
            item6: number;
            itemsPurchased: number;
            killingSprees: number;
            kills: number;
            lane: string;
            largestCriticalStrike: number;
            largestKillingSpree: number;
            largestMultiKill: number;
            longestTimeSpentLiving: number;
            magicDamageDealt: number;
            magicDamageDealtToChampions: number;
            magicDamageTaken: number;
            missions: MissionsDTO;
            neutralMinionsKilled: number;
            needVisionPings: number;
            nexusKills: number;
            nexusTakedowns: number;
            nexusLost: number;
            objectivesStolen: number;
            objectivesStolenAssists: number;
            onMyWayPings: number;
            participantId: number;
            pentaKills: number;
            perks: PerksDTO;
            physicalDamageDealt: number;
            physicalDamageDealtToChampions: number;
            physicalDamageTaken: number;
            placement: number;
            playerAugment1: number;
            playerAugment2: number;
            playerAugment3: number;
            playerAugment4: number;
            playerScore0: number;
            playerScore1: number;
            playerScore2: number;
            playerScore3: number;
            playerScore4: number;
            playerScore5: number;
            playerScore6: number;
            playerScore7: number;
            playerScore8: number;
            playerScore9: number;
            playerScore10: number;
            playerScore11: number;
            playerSubteamId: number;
            profileIcon: number;
            puuid: string;
            pushPings: number;
            quadraKills: number;
            riotIdGameName: string;
            riotIdTagline: string;
            role: string;
            sightWardsBoughtInGame: number;
            spell1Casts: number;
            spell2Casts: number;
            spell3Casts: number;
            spell4Casts: number;
            subteamPlacement: number;
            summoner1Casts: number;
            summoner1Id: number;
            summoner2Casts: number;
            summoner2Id: number;
            summonerId: string;
            summonerLevel: number;
            summonerName: string;
            teamEarlySurrendered: boolean;
            teamId: number;
            teamPosition: string;
            timeCCingOthers: number;
            timePlayed: number;
            totalAllyJungleMinionsKilled: number;
            totalDamageDealt: number;
            totalDamageDealtToChampions: number;
            totalDamageShieldedOnTeammates: number;
            totalDamageTaken: number;
            totalEnemyJungleMinionsKilled: number;
            totalHeal: number;
            totalHealsOnTeammates: number;
            totalMinionsKilled: number;
            totalTimeCCDealt: number;
            totalTimeSpentDead: number;
            totalUnitsHealed: number;
            tripleKills: number;
            trueDamageDealt: number;
            trueDamageDealtToChampions: number;
            trueDamageTaken: number;
            turretKills: number;
            turretTakedowns: number;
            turretsLost: number;
            unrealKills: number;
            visionClearedPings: number;
            visionScore: number;
            visionWardsBoughtInGame: number;
            wardsKilled: number;
            wardsPlaced: number;
            win: boolean;
        }
        interface ObjectivesStatsDTO {
            first: boolean;
            kills: number;
        }
        interface ObjectivesDTO {
            baron: ObjectivesStatsDTO;
            champion: ObjectivesStatsDTO;
            dragon: ObjectivesStatsDTO;
            inhibitor: ObjectivesStatsDTO;
            riftHerald: ObjectivesStatsDTO;
            tower: ObjectivesStatsDTO;
        }
        interface BanDTO {
            championId: number;
            pickTurn: number;
        }
        interface TeamDTO {
            bans: BanDTO[];
            objectives: ObjectivesDTO;
            teamId: number;
            win: boolean;
        }
        interface MatchInfoDTO {
            endOfGameResult: string;
            gameCreation: number;
            gameDuration: number;
            gameId: number;
            gameMode: string;
            gameName: string;
            gameEndTimestamp: number;
            gameStartTimestamp: number;
            gameType: string;
            gameVersion: string;
            mapId: number;
            participants: ParticipantDTO[];
            platformId: string;
            queueId: number;
            teams: TeamDTO[];
            tournamentCode: string;
        }
        interface MetadataDTO {
            dataVersion: string;
            matchId: string;
            participants: string[];
        }
        interface MatchDTO {
            metadata: MetadataDTO;
            info: MatchInfoDTO;
        }
        interface MatchTimelineParticipantDTO {
            participantId: number;
            puuid: string;
        }
        interface PositionDTO {
            x: number;
            y: number;
        }
        interface ParticipantFrameDTO {
            championStats: {
                [key: string]: number;
            };
            currentGold: number;
            damageStats: {
                [key: string]: number;
            };
            goldPerSecond: number;
            jungleMinionsKilled: number;
            level: number;
            minionsKilled: number;
            participantId: number;
            position: PositionDTO;
            timeEnemySpentControlled: number;
            totalGold: number;
            xp: number;
        }
        interface VictimDamageDTO {
            basic: boolean;
            magicDamage: number;
            name: string;
            participantId: number;
            physicalDamage: number;
            spellName: string;
            spellSlot: number;
            trueDamage: number;
            type: string;
        }
        interface EventDTO {
            realTimestamp?: number;
            timestamp: number;
            type: string;
            itemId?: number;
            participantId?: number;
            levelUpType?: string;
            skillSlot?: number;
            creatorId?: number;
            wardType?: string;
            level?: number;
            bounty?: number;
            killStreakLength?: number;
            killerId?: number;
            position?: PositionDTO;
            victimDamageDealt?: string[];
            victimDamageReceived?: string[];
            victimId?: number;
            killType?: string;
            afterId?: number;
            beforeId?: number;
            goldGain?: number;
            assistingParticipantIds?: number[];
            laneType?: string;
            teamId?: number;
            killerTeamId?: number;
            monsterSubType?: string;
            monsterType?: string;
            buildingType?: string;
            towerType?: string;
            transformType?: string;
            multiKillLength?: number;
            gameId?: number;
            winningTeam?: number;
        }
        interface FrameDTO {
            events: EventDTO[];
            participantFrames: {
                [key: string]: ParticipantFrameDTO;
            };
            timestamp: number;
        }
        interface MatchTimelineInfoDTO {
            frameInterval: number;
            frames: FrameDTO[];
            gameId: number;
            participants: MatchTimelineParticipantDTO[];
        }
        interface MatchTimelineDTO {
            metadata: MetadataDTO;
            info: MatchTimelineInfoDTO;
        }
    }
    namespace SpectatorTftV5 {
        interface CurrentGameInfoDTO extends Spectator.CurrentGameInfoDTO {
        }
        interface FeaturedGamesDTO {
            /** The list of featured games */
            gameList: SpectatorTftV5.FeaturedGameInfoDTO[];
            /** The suggested interval to wait before requesting FeaturedGames again */
            clientRefreshInterval: number;
        }
        interface FeaturedGameInfoDTO {
            /** The game mode
             (Legal values: TFT) */
            gameMode: "TFT";
            /** The amount of time in seconds that has passed since the game started */
            gameLength: number;
            /** The ID of the map */
            mapId: number;
            /** The game type
             (Legal values:  MATCHED) */
            gameType: "MATCHED";
            /** Banned champion information */
            bannedChampions: Spectator.BannedChampionDTO[];
            /** The ID of the game */
            gameId: number;
            /** The observer information */
            observers: Spectator.ObserverDTO;
            /** The queue type (queue types are documented on the Game Constants page) */
            gameQueueConfigId: number;
            /** The game start time represented in epoch milliseconds */
            gameStartTime: number;
            /** The participant information */
            participants: SpectatorTftV5.ParticipantDTO[];
            /** The ID of the platform on which the game is being played */
            platformId: string;
        }
        interface ParticipantDTO {
            /** The ID of the second summoner spell used by this participant */
            spell2Id: number;
            /** The ID of the profile icon used by this participant */
            profileIconId: number;
            /** The encrypted summonerId of this participant */
            summonerId: string;
            /** The encrypted puuid of this participant */
            puuid: string;
            /** The ID of the champion played by this participant */
            championId: number;
            /** The team ID of this participant, indicating the participant's team */
            teamId: number;
            /** The ID of the first summoner spell used by this participant */
            spell1Id: number;
        }
    }
    namespace Spectator {
        interface CurrentGameInfoDTO {
            /** The ID of the game */
            gameId: number;
            /** The game type */
            gameType: string;
            /** The game start time represented in epoch milliseconds */
            gameStartTime: number;
            /** The ID of the map */
            mapId: number;
            /** The amount of time in seconds that has passed since the game started */
            gameLength: number;
            /** The ID of the platform on which the game is being played */
            platformId: string;
            /** The game mode */
            gameMode: string;
            /** Banned champion information */
            bannedChampions: Spectator.BannedChampionDTO[];
            /** The queue type (queue types are documented on the Game Constants page) */
            gameQueueConfigId?: number | null;
            /** The observer information */
            observers: Spectator.ObserverDTO;
            /** The participant information */
            participants: Spectator.CurrentGameParticipantDTO[];
        }
        interface BannedChampionDTO {
            /** The turn during which the champion was banned */
            pickTurn: number;
            /** The ID of the banned champion */
            championId: number;
            /** The ID of the team that banned the champion */
            teamId: number;
        }
        interface ObserverDTO {
            /** Key used to decrypt the spectator grid game data for playback */
            encryptionKey: string;
        }
        interface CurrentGameParticipantDTO {
            /** The ID of the champion played by this participant */
            championId: number;
            /** Perks/Runes Reforged Information */
            perks: Spectator.PerksDTO;
            /** The ID of the profile icon used by this participant */
            profileIconId: number;
            /** Flag indicating whether or not this participant is a bot */
            bot: boolean;
            /** The team ID of this participant, indicating the participant's team */
            teamId: number;
            /** The encrypted puuid of this participant */
            puuid: string;
            /** The encrypted summoner ID of this participant */
            summonerId: string;
            /** The ID of the first summoner spell used by this participant */
            spell1Id: number;
            /** The ID of the second summoner spell used by this participant */
            spell2Id: number;
            /** List of Game Customizations */
            gameCustomizationObjects: Spectator.GameCustomizationObjectDTO[];
        }
        interface PerksDTO {
            /** IDs of the perks/runes assigned. */
            perkIds: number[];
            /** Primary runes path */
            perkStyle: number;
            /** Secondary runes path */
            perkSubStyle: number;
        }
        interface GameCustomizationObjectDTO {
            /** Category identifier for Game Customization */
            category: string;
            /** Game Customization content */
            content: string;
        }
        interface FeaturedGamesDTO {
            /** The list of featured games */
            gameList: Spectator.FeaturedGameInfoDTO[];
            /** The suggested interval to wait before requesting FeaturedGames again */
            clientRefreshInterval: number;
        }
        interface FeaturedGameInfoDTO {
            /** The game mode
             (Legal values:  CLASSIC,  ODIN,  ARAM,  TUTORIAL,  ONEFORALL,  ASCENSION,  FIRSTBLOOD,  KINGPORO) */
            gameMode: "CLASSIC" | "ODIN" | "ARAM" | "TUTORIAL" | "ONEFORALL" | "ASCENSION" | "FIRSTBLOOD" | "KINGPORO";
            /** The amount of time in seconds that has passed since the game started */
            gameLength: number;
            /** The ID of the map */
            mapId: number;
            /** The game type
             (Legal values:  CUSTOM_GAME,  MATCHED_GAME,  TUTORIAL_GAME) */
            gameType: "CUSTOM_GAME" | "MATCHED_GAME" | "TUTORIAL_GAME";
            /** Banned champion information */
            bannedChampions: Spectator.BannedChampionDTO[];
            /** The ID of the game */
            gameId: number;
            /** The observer information */
            observers: Spectator.ObserverDTO;
            /** The queue type (queue types are documented on the Game Constants page) */
            gameQueueConfigId: number;
            /** The game start time represented in epoch milliseconds */
            gameStartTime: number;
            /** The participant information */
            participants: Spectator.ParticipantDTO[];
            /** The ID of the platform on which the game is being played */
            platformId: string;
        }
        interface ParticipantDTO {
            /** Flag indicating whether or not this participant is a bot */
            bot: boolean;
            /** The ID of the second summoner spell used by this participant */
            spell2Id: number;
            /** The ID of the profile icon used by this participant */
            profileIconId: number;
            /** The encrypted puuid of this participant */
            puuid: string;
            /** The ID of the champion played by this participant */
            championId: number;
            /** The team ID of this participant, indicating the participant's team */
            teamId: number;
            /** The ID of the first summoner spell used by this participant */
            spell1Id: number;
        }
    }
    namespace Summoner {
        interface SummonerDTO {
            profileIconId: number;
            puuid: string;
            summonerLevel: number;
            revisionDate: number;
            id: string;
            accountId: string;
        }
    }
    namespace TftLeague {
        enum RatedTier {
            ORANGE = "ORANGE",
            PURPLE = "PURPLE",
            BLUE = "BLUE",
            GREEN = "GREEN",
            GRAY = "GRAY"
        }
        interface LeagueListDTO {
            leagueId: string;
            entries: TftLeague.LeagueItemDTO[];
            tier: string;
            name: string;
            queue: string;
        }
        interface LeagueItemDTO {
            freshBlood: boolean;
            /** First placement. */
            wins: number;
            miniSeries?: TftLeague.MiniSeriesDTO | null;
            inactive: boolean;
            veteran: boolean;
            hotStreak: boolean;
            rank: string;
            leaguePoints: number;
            /** Second through eighth placement. */
            losses: number;
            /** Player's encrypted summonerId. */
            summonerId: string;
        }
        interface MiniSeriesDTO {
            losses: number;
            progress: string;
            target: number;
            wins: number;
        }
        interface LeagueEntryDTO {
            leagueId?: string;
            /** Player's encrypted summonerId. */
            summonerId: string;
            queueType: string;
            ratedTier?: RatedTier;
            ratedRating?: number;
            tier?: string;
            rank?: string;
            leaguePoints?: number;
            /** First placement. */
            wins: number;
            /** Second through eighth placement. */
            losses: number;
            hotStreak?: boolean;
            veteran?: boolean;
            freshBlood?: boolean;
            inactive?: boolean;
            miniSeries?: TftLeague.MiniSeriesDTO | null;
        }
        interface TopRatedLadderEntryDTO {
            summonerId: string;
            ratedTier: RatedTier;
            ratedRating: number;
            wins: number;
            previousUpdateLadderPosition: number;
        }
    }
    namespace TftMatch {
        interface MatchDTO {
            /** Match metadata. */
            metadata: TftMatch.MetadataDTO;
            /** Match info. */
            info: TftMatch.InfoDTO;
        }
        interface MetadataDTO {
            /** Match data version. */
            data_version: string;
            /** Match id. */
            match_id: string;
            /** A list of encrypted participant PUUIDs. */
            participants: string[];
        }
        interface InfoDTO {
            /** Unix timestamp. */
            game_datetime: number;
            /** Game length in seconds. */
            game_length: number;
            /** Game variation key. Game variations documented in TFT static data. */
            game_variation?: string | null;
            /** Game client version. */
            game_version: string;
            /** Participants. */
            participants: TftMatch.ParticipantDTO[];
            /** Please refer to the League of Legends documentation. */
            queue_id: number;
            /** Teamfight Tactics game type. */
            tft_game_type: string;
            /** Teamfight Tactics set core name. */
            tft_set_core_name: string;
            /** Teamfight Tactics set number. */
            tft_set_number: number;
        }
        interface ParticipantDTO {
            /** Participant's augments. */
            augments: string[];
            /** Participant's companion. */
            companion: TftMatch.CompanionDTO;
            /** Gold left after participant was eliminated. */
            gold_left: number;
            /** The round the participant was eliminated in. Note: If the player was eliminated in stage 2-1 their last_round would be 5. */
            last_round: number;
            /** Participant Little Legend level. Note: This is not the number of active units. */
            level: number;
            /** Partner group id. */
            partner_group_id: number;
            /** Participant placement upon elimination. */
            placement: number;
            /** Number of players the participant eliminated. */
            players_eliminated: number;
            /** Encrypted PUUID. */
            puuid: string;
            /** The number of seconds before the participant was eliminated. */
            time_eliminated: number;
            /** Damage the participant dealt to other players. */
            total_damage_to_players: number;
            /** A complete list of traits for the participant's active units. */
            traits: TftMatch.TraitDTO[];
            /** A list of active units for the participant. */
            units: TftMatch.UnitDTO[];
        }
        interface TraitDTO {
            /** Trait name. */
            name: string;
            /** Number of units with this trait. */
            num_units: number;
            /** Current style for this trait. (0 = No style, 1 = Bronze, 2 = Silver, 3 = Gold, 4 = Chromatic) */
            style?: number | null;
            /** Current active tier for the trait. */
            tier_current: number;
            /** Total tiers for the trait. */
            tier_total?: number | null;
        }
        interface UnitDTO {
            /** A list of the unit's items names. */
            itemNames: string[];
            /** This field was introduced in patch 9.22 with data_version 2. */
            character_id: string;
            /** Unit name. */
            name: string;
            /** Unit rarity. This doesn't equate to the unit cost. */
            rarity: number;
            /** Unit tier. */
            tier: number;
        }
        interface CompanionDTO {
            skin_ID: number;
            content_ID: string;
            species: string;
        }
    }
    namespace TftStatusV1 {
        interface PlatformDataDTO extends LolStatus.PlatformDataDTO {
        }
        interface StatusDTO extends LolStatus.StatusDTO {
        }
        interface ContentDTO extends LolStatus.ContentDTO {
        }
        interface UpdateDTO extends LolStatus.UpdateDTO {
        }
    }
    namespace TftSummoner {
        interface SummonerDTO {
            /** Encrypted account ID. Max length 56 characters. */
            accountId: string;
            /** ID of the summoner icon associated with the summoner. */
            profileIconId: number;
            /** Date summoner was last modified specified as epoch milliseconds. The following events will update this timestamp: summoner name change, summoner level change, or profile icon change. */
            revisionDate: number;
            /** Summoner name. */
            name: string;
            /** Encrypted summoner ID. Max length 63 characters. */
            id: string;
            /** Encrypted PUUID. Exact length of 78 characters. */
            puuid: string;
            /** Summoner level associated with the summoner. */
            summonerLevel: number;
        }
    }
    namespace TournamentV5 {
        enum REGION {
            BR = "BR",
            EUNE = "EUNE",
            EUW = "EUW",
            JP = "JP",
            LAN = "LAN",
            LAS = "LAS",
            NA = "NA",
            OCE = "OCE",
            PBE = "PBE",
            RU = "RU",
            TR = "TR",
            KR = "KR"
        }
        enum PICKTYPE {
            BLIND_PICK = "BLIND_PICK",
            DRAFT_MODE = "DRAFT_MODE",
            ALL_RANDOM = "ALL_RANDOM",
            TOURNAMENT_DRAFT = "TOURNAMENT_DRAFT"
        }
        enum MAPTYPE {
            SUMMONERS_RIFT = "SUMMONERS_RIFT",
            HOWLING_ABYSS = "HOWLING_ABYSS"
        }
        enum SPECTATORTYPE {
            NONE = "NONE",
            LOBBYONLY = "LOBBYONLY",
            ALL = "ALL"
        }
        interface TournamentCodeParametersV5DTO {
            /** Optional list of encrypted puuids in order to validate the players eligible to join the lobby. NOTE: We currently do not enforce participants at the team level, but rather the aggregate of teamOne and teamTwo. We may add the ability to enforce at the team level in the future. */
            allowedParticipants?: string[] | null;
            /** Optional string that may contain any data in any format, if specified at all. Used to denote any custom information about the game. */
            metadata?: string | null;
            /** The team size of the game. Valid values are 1-5. */
            teamSize: number;
            /** The pick type of the game.
                 (Legal values:  BLIND_PICK,  DRAFT_MODE,  ALL_RANDOM,  TOURNAMENT_DRAFT) */
            pickType: PICKTYPE;
            /** The map type of the game.
                 (Legal values:  SUMMONERS_RIFT,  TWISTED_TREELINE,  HOWLING_ABYSS) */
            mapType: MAPTYPE;
            /** The spectator type of the game.
                 (Legal values:  NONE,  LOBBYONLY,  ALL) */
            spectatorType: SPECTATORTYPE;
            /** Checks if allowed participants are enough to make full teams */
            enoughPlayers: boolean;
        }
        interface ProviderRegistrationParametersV5DTO {
            /** The region in which the provider will be running tournaments.
                 (Legal values:  BR,  EUNE,  EUW,  JP,  LAN,  LAS,  NA,  OCE,  PBE,  RU,  TR, KR) */
            region: REGION;
            /** The provider's callback URL to which tournament game results in this region should be posted. The URL must be well-formed, use the http or https protocol, and use the default port for the protocol (http URLs must use port 80, https URLs must use port 443). */
            url: string;
        }
        interface TournamentRegistrationParametersV5DTO {
            /** The provider ID to specify the regional registered provider data to associate this tournament. */
            providerId: number;
            /** The optional name of the tournament. */
            name?: string | null;
        }
        interface TournamentCodeV5DTO {
            /** The tournament code. */
            code: string;
            /** The spectator mode for the tournament code game. */
            spectators: string;
            /** The lobby name for the tournament code game. */
            lobbyName: string;
            /** The metadata for tournament code. */
            metaData: string;
            /** The password for the tournament code game. */
            password: string;
            /** The team size for the tournament code game. */
            teamSize: number;
            /** The provider's ID. */
            providerId: number;
            /** The pick mode for tournament code game. */
            pickType: string;
            /** The tournament's ID. */
            tournamentId: number;
            /** The tournament code's ID. */
            id: number;
            /** The tournament code's region.
                 (Legal values:  BR,  EUNE,  EUW,  JP,  LAN,  LAS,  NA,  OCE,  PBE,  RU,  TR, KR) */
            region: REGION;
            /** The game map for the tournament code game */
            map: string;
            /** The puuids of the participants (Encrypted) */
            participants: string[];
        }
        interface TournamentCodeUpdateParametersV5DTO {
            /** Optional list of encrypted puuids in order to validate the players eligible to join the lobby. NOTE: We currently do not enforce participants at the team level, but rather the aggregate of teamOne and teamTwo. We may add the ability to enforce at the team level in the future. */
            allowedParticipants?: string[] | null;
            /** The pick type
                 (Legal values:  BLIND_PICK,  DRAFT_MODE,  ALL_RANDOM,  TOURNAMENT_DRAFT) */
            pickType: PICKTYPE;
            /** The map type
                 (Legal values:  SUMMONERS_RIFT,  HOWLING_ABYSS) */
            mapType: MAPTYPE;
            /** The spectator type
                 (Legal values:  NONE,  LOBBYONLY,  ALL) */
            spectatorType: SPECTATORTYPE;
        }
        interface LobbyEventV5DTOWrapper {
            eventList: TournamentV5.LobbyEventV5DTO[];
        }
        interface LobbyEventV5DTO {
            /** Timestamp from the event */
            timestamp: string;
            /** The type of event that was triggered */
            eventType: string;
            /** The puuid that triggered the event (Encrypted) */
            puuid: string;
        }
        interface TournamentTeamV5DTO {
            /** Player unique UUID (Encrypted) */
            puuid: string;
        }
        interface TournanmentGamesV5DTO {
            winningTeam: TournamentV5.TournamentTeamV5DTO[];
            losingTeam: TournamentV5.TournamentTeamV5DTO[];
            /** Tournament Code */
            shortCode: string;
            metaData: string;
            gameId: number;
            gameName: string;
            gameType: string;
            gameMap: number;
            gameMode: string;
            region: LoLRegion;
        }
        /** Server Callback DTO */
        interface TournamentGamesServerCallbackV5DTO {
            startTime: number;
            shortCode: string;
            metaData: string;
            gameId: number;
            gameName: string;
            gameType: string;
            gameMode: string;
            region: LoLRegion;
        }
    }
    namespace ValContent {
        interface ContentItemDTO {
            name: string;
            /** This field is excluded from the response when a locale is set */
            localizedNames?: ValContent.LocalizedNamesDTO | null;
            id: string;
            assetName: string;
            /** This field is only included for maps and game modes. These values are used in the match response */
            assetPath?: string | null;
        }
        interface ActDTO {
            name: string;
            /** This field is excluded from the response when a locale is set */
            localizedNames?: ValContent.LocalizedNamesDTO | null;
            id: string;
            isActive: string;
        }
        interface LocalizedNamesDTO {
            "ar-AE": string;
            "de-DE": string;
            "en-GB": string;
            "en-US": string;
            "es-ES": string;
            "es-MX": string;
            "fr-FR": string;
            "id-ID": string;
            "it-IT": string;
            "ja-JP": string;
            "ko-KR": string;
            "pl-PL": string;
            "pt-BR": string;
            "ru-RU": string;
            "th-TH": string;
            "tr-TR": string;
            "vi-VN": string;
            "zh-CN": string;
            "zh-TW": string;
        }
        interface ContentDTO {
            version: string;
            characters: ContentItemDTO[];
            maps: ContentItemDTO[];
            chromas: ContentItemDTO[];
            skins: ContentItemDTO[];
            skinLevels: ContentItemDTO[];
            equips: ContentItemDTO[];
            gameModes: ContentItemDTO[];
            sprays: ContentItemDTO[];
            sprayLevels: ContentItemDTO[];
            charms: ContentItemDTO[];
            charmLevels: ContentItemDTO[];
            playerCards: ContentItemDTO[];
            playerTitles: ContentItemDTO[];
            acts: ActDTO[];
        }
    }
    namespace ValMatch {
        interface MatchDTO {
            matchInfo: ValMatch.MatchInfoDTO;
            players: ValMatch.PlayerDTO[];
            coaches: ValMatch.CoachDTO[];
            teams: ValMatch.TeamDTO[];
            roundResults: ValMatch.RoundResultDTO[];
        }
        interface MatchInfoDTO {
            matchId: string;
            mapId: string;
            gameLengthMillis: number;
            gameStartMillis: number;
            provisioningFlowId: string;
            isCompleted: boolean;
            customGameName: string;
            queueId: string;
            gameMode: string;
            isRanked: boolean;
            seasonId: string;
        }
        interface PlayerDTO {
            puuid: string;
            teamId: string;
            partyId: string;
            characterId: string;
            stats: ValMatch.PlayerStatsDTO;
            competitiveTier: number;
            playerCard: string;
            playerTitle: string;
        }
        interface PlayerStatsDTO {
            score: number;
            roundsPlayed: number;
            kills: number;
            deaths: number;
            assists: number;
            playtimeMillis: number;
            abilityCasts: ValMatch.AbilityCastsDTO;
        }
        interface AbilityCastsDTO {
            grenadeCasts: number;
            ability1Casts: number;
            ability2Casts: number;
            ultimateCasts: number;
        }
        interface CoachDTO {
            puuid: string;
            teamId: string;
        }
        interface TeamDTO {
            /** This is an arbitrary string. Red and Blue in bomb modes. The puuid of the player in deathmatch. */
            teamId: string;
            won: boolean;
            roundsPlayed: number;
            roundsWon: number;
            /** Team points scored. Number of kills in deathmatch. */
            numPoints: number;
        }
        interface RoundResultDTO {
            roundNum: number;
            roundResult: string;
            roundCeremony: string;
            winningTeam: string;
            /** PUUID of player */
            bombPlanter: string;
            /** PUUID of player */
            bombDefuser: string;
            plantRoundTime: number;
            plantPlayerLocations: ValMatch.PlayerLocationsDTO[];
            plantLocation: ValMatch.LocationDTO;
            plantSite: string;
            defuseRoundTime: number;
            defusePlayerLocations: ValMatch.PlayerLocationsDTO[];
            defuseLocation: ValMatch.LocationDTO;
            playerStats: ValMatch.PlayerRoundStatsDTO[];
            roundResultCode: string;
        }
        interface PlayerLocationsDTO {
            puuid: string;
            viewRadians: number;
            location: ValMatch.LocationDTO;
        }
        interface LocationDTO {
            x: number;
            y: number;
        }
        interface PlayerRoundStatsDTO {
            puuid: string;
            kills: ValMatch.KillDTO[];
            damage: ValMatch.DamageDTO[];
            score: number;
            economy: ValMatch.EconomyDTO;
            ability: ValMatch.AbilityDTO;
        }
        interface KillDTO {
            gameTime?: number | null;
            roundTime?: number | null;
            timeSinceGameStartMillis?: number | null;
            timeSinceRoundStartMillis?: number | null;
            /** PUUID */
            killer: string;
            /** PUUID */
            victim: string;
            victimLocation: ValMatch.LocationDTO;
            /** List of PUUIDs */
            assistants: string[];
            playerLocations: ValMatch.PlayerLocationsDTO[];
            finishingDamage: ValMatch.FinishingDamageDTO;
        }
        interface FinishingDamageDTO {
            damageType: string;
            damageItem: string;
            isSecondaryFireMode: boolean;
        }
        interface DamageDTO {
            /** PUUID */
            receiver: string;
            damage: number;
            legshots: number;
            bodyshots: number;
            headshots: number;
        }
        interface EconomyDTO {
            loadoutValue: number;
            weapon: string;
            armor: string;
            remaining: number;
            spent: number;
        }
        interface AbilityDTO {
            grenadeEffects: string;
            ability1Effects: string;
            ability2Effects: string;
            ultimateEffects: string;
        }
        interface MatchlistDTO {
            puuid: string;
            history: ValMatch.MatchlistEntryDTO[];
        }
        interface MatchlistEntryDTO {
            matchId: string;
            gameStartTimeMillis: number;
            queueId: string;
        }
        interface RecentMatchesDTO {
            currentTime: number;
            matchIds: string[];
        }
    }
    namespace ValRanked {
        interface PlayerDTO {
            puuid: string;
            gameName: string;
            tagLine: string;
            leaderboardRank: number;
            rankedRating: number;
            numberOfWins: number;
        }
        interface LeaderboardDTO {
            shared: string;
            actId: string;
            totalPlayers: number;
            players: ValRanked.PlayerDTO[];
        }
    }
    namespace ValStatusV1 {
        interface PlatformDataDTO extends LolStatus.PlatformDataDTO {
        }
        interface StatusDTO extends LolStatus.StatusDTO {
        }
        interface ContentDTO extends LolStatus.ContentDTO {
        }
        interface UpdateDTO extends LolStatus.UpdateDTO {
        }
    }
    namespace DDragon {
        export enum REALM {
            NA = "na",
            EUW = "euw",
            EUNE = "eune",
            BR = "br",
            JP = "jp",
            KR = "kr",
            OCE = "oce",
            LAN = "lan",
            LAS = "las",
            RU = "ru",
            TR = "tr"
        }
        export enum LOCALE {
            cs_CZ = "cs_CZ",// Czech (Czech Republic)
            el_GR = "el_GR",// Greek (Greece)
            pl_PL = "pl_PL",// Polish (Poland)
            ro_RO = "ro_RO",// Romanian (Romania)
            hu_HU = "hu_HU",// Hungarian (Hungary)
            en_GB = "en_GB",// English (United Kingdom)
            de_DE = "de_DE",// German (Germany)
            es_ES = "es_ES",// Spanish (Spain)
            it_IT = "it_IT",// Italian (Italy)
            fr_FR = "fr_FR",// French (France)
            ja_JP = "ja_JP",// Japanese (Japan)
            ko_KR = "ko_KR",// Korean (Korea)
            es_MX = "es_MX",// Spanish (Mexico)
            es_AR = "es_AR",// Spanish (Argentina)
            pt_BR = "pt_BR",// Portuguese (Brazil)
            en_US = "en_US",// English (United States)
            en_AU = "en_AU",// English (Australia)
            ru_RU = "ru_RU",// Russian (Russia)
            tr_TR = "tr_TR",// Turkish (Turkey)
            ms_MY = "ms_MY",// Malay (Malaysia)
            en_PH = "en_PH",// English (Republic of the Philippines)
            en_SG = "en_SG",// English (Singapore)
            th_TH = "th_TH",// Thai (Thailand)
            vi_VN = "vi_VN",// Vietnamese (Viet Nam)
            id_ID = "id_ID",// Indonesian (Indonesia)
            zh_MY = "zh_MY",// Chinese (Malaysia)
            zh_CN = "zh_CN",// Chinese (China)
            zh_TW = "zh_TW"
        }
        interface DDragonWrapper {
            type: string;
            format?: string;
            version: string;
        }
        interface DDragonDataWrapper<T> extends DDragonWrapper {
            data: {
                [key: string]: T;
            };
        }
        export interface DDragonImageDTO {
            full: string;
            sprite: string;
            group: string;
            x: number;
            y: number;
            w: number;
            h: number;
        }
        export interface DDragonMapDTO extends DDragonDataWrapper<DDragonMapDataDTO> {
        }
        export interface DDragonMapDataDTO {
            MapName: string;
            MapId: string;
            image: DDragonImageDTO;
        }
        export interface DDragonImageWrapperDTO {
            id: number;
            image: DDragonImageDTO;
        }
        export interface DDragonProfileIconDTO extends DDragonDataWrapper<DDragonImageWrapperDTO> {
        }
        export interface DDragonSummonerSpellDTO extends DDragonDataWrapper<DDragonSummonerSpellDataDTO> {
        }
        interface DDragonSpellWrapper {
            id: string;
            name: string;
            description: string;
            tooltip: string;
            maxrank: number;
            cooldown: number[];
            cooldownBurn: string;
            cost: number[];
            datavalues: object;
            effect: number[][];
            effectBurn: string[];
            vars: {
                link: string;
                coeff: number;
                key: string;
            }[];
            costType: string;
            maxammo: string;
            range: number[];
            rangeBurn: string;
            image: DDragonImageDTO;
            resource: string;
        }
        export interface DDragonChampionSpellDTO extends DDragonSpellWrapper {
            costBurn: string[];
            leveltip: {
                label: string[];
                effect: string[];
            };
        }
        export interface DDragonSummonerSpellDataDTO extends DDragonSpellWrapper {
            costBurn: string;
            key: string;
            summonerLevel: number;
            modes: string[];
        }
        export interface DDragonRealmsDTO {
            n: {
                item: string;
                rune: string;
                mastery: string;
                summoner: string;
                champion: string;
                profileicon: string;
                map: string;
                language: string;
                sticker: string;
            };
            v: string;
            l: string;
            cdn: string;
            dd: string;
            lg: string;
            css: string;
            profileiconmax: number;
            store: null;
        }
        export interface DDragonRunesReforgedDTO {
            id: number;
            key: string;
            icon: string;
            name: string;
            slots: DDragonRunesReforgedSlotDTO[];
        }
        export interface DDragonRunesReforgedSlotDTO {
            runes: DDragonRunesReforgedRuneDTO[];
        }
        export interface DDragonRunesReforgedRuneDTO {
            id: number;
            key: string;
            icon: string;
            name: string;
            shortDesc: string;
            longDesc: string;
        }
        export interface DDragonItemWrapperDTO extends DDragonDataWrapper<DDragonItemDTO> {
            basic: DDragonItemDTO;
            groups: {
                id: string;
                MaxGroupOwnable: string;
            }[];
            tree: {
                header: string;
                tags: string[];
            }[];
        }
        export interface DDragonItemDTO {
            name: string;
            rune: {
                isrune: boolean;
                tier: number;
                type: string;
            };
            gold: {
                base: number;
                total: number;
                sell: number;
                purchasable: boolean;
            };
            group: string;
            description: string;
            colloq: string;
            plaintext: string;
            consumed: boolean;
            stacks: number;
            depth: number;
            consumeOnFull: boolean;
            from: string[];
            into: string[];
            image: DDragonImageDTO;
            specialRecipe: number;
            inStore: boolean;
            hideFromAll: boolean;
            requiredChampion: string;
            requiredAlly: string;
            stats: {
                FlatHPPoolMod?: number;
                rFlatHPModPerLevel?: number;
                FlatMPPoolMod?: number;
                rFlatMPModPerLevel?: number;
                PercentHPPoolMod?: number;
                PercentMPPoolMod?: number;
                FlatHPRegenMod?: number;
                rFlatHPRegenModPerLevel?: number;
                PercentHPRegenMod?: number;
                FlatMPRegenMod?: number;
                rFlatMPRegenModPerLevel?: number;
                PercentMPRegenMod?: number;
                FlatArmorMod?: number;
                rFlatArmorModPerLevel?: number;
                PercentArmorMod?: number;
                rFlatArmorPenetrationMod?: number;
                rFlatArmorPenetrationModPerLevel?: number;
                rPercentArmorPenetrationMod?: number;
                rPercentArmorPenetrationModPerLevel?: number;
                FlatPhysicalDamageMod?: number;
                rFlatPhysicalDamageModPerLevel?: number;
                PercentPhysicalDamageMod?: number;
                FlatMagicDamageMod?: number;
                rFlatMagicDamageModPerLevel?: number;
                PercentMagicDamageMod?: number;
                FlatMovementSpeedMod?: number;
                rFlatMovementSpeedModPerLevel?: number;
                PercentMovementSpeedMod?: number;
                rPercentMovementSpeedModPerLevel?: number;
                FlatAttackSpeedMod?: number;
                PercentAttackSpeedMod?: number;
                rPercentAttackSpeedModPerLevel?: number;
                rFlatDodgeMod?: number;
                rFlatDodgeModPerLevel?: number;
                PercentDodgeMod?: number;
                FlatCritChanceMod?: number;
                rFlatCritChanceModPerLevel?: number;
                PercentCritChanceMod?: number;
                FlatCritDamageMod?: number;
                rFlatCritDamageModPerLevel?: number;
                PercentCritDamageMod?: number;
                FlatBlockMod?: number;
                PercentBlockMod?: number;
                FlatSpellBlockMod?: number;
                rFlatSpellBlockModPerLevel?: number;
                PercentSpellBlockMod?: number;
                FlatEXPBonus?: number;
                PercentEXPBonus?: number;
                rPercentCooldownMod?: number;
                rPercentCooldownModPerLevel?: number;
                rFlatTimeDeadMod?: number;
                rFlatTimeDeadModPerLevel?: number;
                rPercentTimeDeadMod?: number;
                rPercentTimeDeadModPerLevel?: number;
                rFlatGoldPer10Mod?: number;
                rFlatMagicPenetrationMod?: number;
                rFlatMagicPenetrationModPerLevel?: number;
                rPercentMagicPenetrationMod?: number;
                rPercentMagicPenetrationModPerLevel?: number;
                FlatEnergyRegenMod?: number;
                rFlatEnergyRegenModPerLevel?: number;
                FlatEnergyPoolMod?: number;
                rFlatEnergyModPerLevel?: number;
                PercentLifeStealMod?: number;
                PercentSpellVampMod?: number;
            };
            tags: string[];
            maps: {
                [key: string]: boolean;
            };
            effect?: {
                [key: string]: string;
            };
        }
        export interface DDragonChampionInfoDTO {
            attack: number;
            defense: number;
            magic: number;
            difficulty: number;
        }
        export interface DDragonChampionStatsDTO {
            hp: number;
            hpperlevel: number;
            mp: number;
            mpperlevel: number;
            movespeed: number;
            armor: number;
            armorperlevel: number;
            spellblock: number;
            spellblockperlevel: number;
            attackrange: number;
            hpregen: number;
            hpregenperlevel: number;
            mpregen: number;
            mpregenperlevel: number;
            crit: number;
            critperlevel: number;
            attackdamage: number;
            attackdamageperlevel: number;
            attackspeedperlevel: number;
            attackspeed: number;
        }
        export interface DDragonChampionListDTO extends DDragonDataWrapper<DDragonChampionListDataDTO> {
        }
        export interface DDragonChampionListDataDTO {
            version: string;
            id: string;
            key: string;
            name: string;
            title: string;
            blurb: string;
            info: DDragonChampionInfoDTO;
            image: DDragonImageDTO;
            tags: string[];
            partype: string;
            stats: DDragonChampionStatsDTO;
        }
        export interface DDragonChampionDTO extends DDragonDataWrapper<DDragonChampionDataDTO> {
        }
        interface DDragonSpellWrapper {
            id: string;
            name: string;
            description: string;
            tooltip: string;
            maxrank: number;
            cooldown: number[];
            cooldownBurn: string;
            cost: number[];
            datavalues: object;
            effect: number[][];
            effectBurn: string[];
            vars: {
                link: string;
                coeff: number;
                key: string;
            }[];
            costType: string;
            maxammo: string;
            range: number[];
            rangeBurn: string;
            image: DDragonImageDTO;
            resource: string;
        }
        export interface DDragonChampionSpellDTO extends DDragonSpellWrapper {
            costBurn: string[];
            leveltip: {
                label: string[];
                effect: string[];
            };
        }
        export interface DDragonChampionDataDTO {
            id: string;
            key: string;
            name: string;
            title: string;
            image: DDragonImageDTO;
            skins: {
                id: string;
                num: number;
                name: string;
                chromas: boolean;
            }[];
            lore: string;
            blurb: string;
            allytips: string[];
            enemytips: string[];
            tags: string[];
            partype: string;
            info: DDragonChampionInfoDTO;
            stats: DDragonChampionStatsDTO;
            spells: DDragonChampionSpellDTO[];
            passive: {
                name: string;
                description: string;
                image: DDragonImageDTO;
            };
            recommended: {
                champion?: string;
                title?: string;
                map?: string;
                mode?: string;
                type: string;
                customTag: string;
                requiredPerk: string;
                sortrank: string;
                extensionPage: boolean;
                customPanel: string;
                customPanelCurrencyType?: string;
                customPanelBuffCurrencyName?: string;
                blocks: {
                    type: string;
                    recMath: boolean;
                    recSteps?: boolean;
                    minSummonerLevel: number;
                    maxSummonerLevel: number;
                    showIfSummonerSpell: string;
                    hideIfSummonerSpell: string;
                    appendAfterSection?: string;
                    visibleWithAllOf?: string[];
                    hiddenWithAnyOf?: string[];
                    items: {
                        id: string;
                        count: number;
                        hideCount: boolean;
                    }[];
                }[];
            }[];
        }
        export {};
    }
}
