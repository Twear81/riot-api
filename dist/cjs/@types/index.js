"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RiotAPITypes = void 0;
var RiotAPITypes;
(function (RiotAPITypes) {
    let QUEUE;
    (function (QUEUE) {
        QUEUE["RANKED_SOLO_5x5"] = "RANKED_SOLO_5x5";
        QUEUE["RANKED_TFT"] = "RANKED_TFT";
        QUEUE["RANKED_FLEX_SR"] = "RANKED_FLEX_SR";
        QUEUE["RANKED_FLEX_TT"] = "RANKED_FLEX_TT";
    })(QUEUE = RiotAPITypes.QUEUE || (RiotAPITypes.QUEUE = {}));
    let TIER;
    (function (TIER) {
        TIER["CHALLENGER"] = "CHALLENGER";
        TIER["GRANDMASTER"] = "GRANDMASTER";
        TIER["MASTER"] = "MASTER";
        TIER["DIAMOND"] = "DIAMOND";
        TIER["EMERALD"] = "EMERALD";
        TIER["PLATINUM"] = "PLATINUM";
        TIER["GOLD"] = "GOLD";
        TIER["SILVER"] = "SILVER";
        TIER["BRONZE"] = "BRONZE";
        TIER["IRON"] = "IRON";
    })(TIER = RiotAPITypes.TIER || (RiotAPITypes.TIER = {}));
    let TFT_TIER;
    (function (TFT_TIER) {
        TFT_TIER["DIAMOND"] = "DIAMOND";
        TFT_TIER["PLATINUM"] = "PLATINUM";
        TFT_TIER["GOLD"] = "GOLD";
        TFT_TIER["SILVER"] = "SILVER";
        TFT_TIER["BRONZE"] = "BRONZE";
        TFT_TIER["IRON"] = "IRON";
    })(TFT_TIER = RiotAPITypes.TFT_TIER || (RiotAPITypes.TFT_TIER = {}));
    let DIVISION;
    (function (DIVISION) {
        DIVISION["I"] = "I";
        DIVISION["II"] = "II";
        DIVISION["III"] = "III";
        DIVISION["IV"] = "IV";
    })(DIVISION = RiotAPITypes.DIVISION || (RiotAPITypes.DIVISION = {}));
    let VAL_QUEUE;
    (function (VAL_QUEUE) {
        VAL_QUEUE["COMPETITIVE"] = "competitive";
        VAL_QUEUE["UNRATED"] = "unrated";
        VAL_QUEUE["SPIKERUSH"] = "spikerush";
        VAL_QUEUE["TOURNAMENTMODE"] = "tournamentmode";
        VAL_QUEUE["DEATHMATCH"] = "deathmatch";
        VAL_QUEUE["ONEFA"] = "onefa";
        VAL_QUEUE["GGTEAM"] = "ggteam";
    })(VAL_QUEUE = RiotAPITypes.VAL_QUEUE || (RiotAPITypes.VAL_QUEUE = {}));
    let METHOD_KEY;
    (function (METHOD_KEY) {
        let ACCOUNT_V1;
        (function (ACCOUNT_V1) {
            ACCOUNT_V1.GET_BY_PUUID = "ACCOUNT_V1.GET_BY_PUUID";
            ACCOUNT_V1.GET_BY_RIOT_ID = "ACCOUNT_V1.GET_BY_RIOT_ID";
            ACCOUNT_V1.GET_BY_ACCESS_TOKEN = "ACCOUNT_V1.GET_BY_ACCESS_TOKEN";
            ACCOUNT_V1.GET_ACTIVE_SHARD_FOR_PLAYER = "ACCOUNT_V1.GET_ACTIVE_SHARD_FOR_PLAYER";
        })(ACCOUNT_V1 = METHOD_KEY.ACCOUNT_V1 || (METHOD_KEY.ACCOUNT_V1 = {}));
        let CHAMPION_MASTERY_V4;
        (function (CHAMPION_MASTERY_V4) {
            CHAMPION_MASTERY_V4.GET_ALL_CHAMPIONS = "CHAMPION_MASTERY_V4.GET_ALL_CHAMPIONS";
            CHAMPION_MASTERY_V4.GET_CHAMPION_MASTERY = "CHAMPION_MASTERY_V4.GET_CHAMPION_MASTERY";
            CHAMPION_MASTERY_V4.GET_TOP_CHAMPIONS = "CHAMPION_MASTERY_V4.GET_TOP_CHAMPIONS";
            CHAMPION_MASTERY_V4.GET_CHAMPION_MASTERY_SCORE = "CHAMPION_MASTERY_V4.GET_CHAMPION_MASTERY_SCORE";
        })(CHAMPION_MASTERY_V4 = METHOD_KEY.CHAMPION_MASTERY_V4 || (METHOD_KEY.CHAMPION_MASTERY_V4 = {}));
        let CHAMPION_V3;
        (function (CHAMPION_V3) {
            CHAMPION_V3.GET_CHAMPION_ROTATIONS = "CHAMPION_V3.GET_CHAMPION_ROTATIONS";
        })(CHAMPION_V3 = METHOD_KEY.CHAMPION_V3 || (METHOD_KEY.CHAMPION_V3 = {}));
        let CLASH_V1;
        (function (CLASH_V1) {
            CLASH_V1.GET_PLAYERS_BY_PUUID = "CLASH_V1.GET_PLAYERS_BY_PUUID";
            CLASH_V1.GET_TEAM = "CLASH_V1.GET_TEAM";
            CLASH_V1.GET_TOURNAMENTS = "CLASH_V1.GET_TOURNAMENTS";
            CLASH_V1.GET_TOURNAMENT = "CLASH_V1.GET_TOURNAMENT";
            CLASH_V1.GET_TOURNAMENT_TEAM = "CLASH_V1.GET_TOURNAMENT_TEAM";
        })(CLASH_V1 = METHOD_KEY.CLASH_V1 || (METHOD_KEY.CLASH_V1 = {}));
        let LEAGUE_EXP_V4;
        (function (LEAGUE_EXP_V4) {
            LEAGUE_EXP_V4.GET_LEAGUE_ENTRIES = "LEAGUE_EXP_V4.GET_LEAGUE_ENTRIES";
        })(LEAGUE_EXP_V4 = METHOD_KEY.LEAGUE_EXP_V4 || (METHOD_KEY.LEAGUE_EXP_V4 = {}));
        let LEAGUE_V4;
        (function (LEAGUE_V4) {
            LEAGUE_V4.GET_CHALLENGER_BY_QUEUE = "LEAGUE_V4.GET_CHALLENGER_BY_QUEUE";
            LEAGUE_V4.GET_ENTRIES_BY_PUUID = "LEAGUE_V4.GET_ENTRIES_BY_PUUID";
            LEAGUE_V4.GET_ALL_ENTRIES = "LEAGUE_V4.GET_ALL_ENTRIES";
            LEAGUE_V4.GET_GRANDMASTER_BY_QUEUE = "LEAGUE_V4.GET_GRANDMASTER_BY_QUEUE";
            LEAGUE_V4.GET_LEAGUE_BY_ID = "LEAGUE_V4.GET_LEAGUE_BY_ID";
            LEAGUE_V4.GET_MASTER_BY_QUEUE = "LEAGUE_V4.GET_MASTER_BY_QUEUE";
        })(LEAGUE_V4 = METHOD_KEY.LEAGUE_V4 || (METHOD_KEY.LEAGUE_V4 = {}));
        let LOL_CHALLENGES_V1;
        (function (LOL_CHALLENGES_V1) {
            LOL_CHALLENGES_V1.GET_CONFIG = "LOL_CHALLENGES_V1.GET_CONFIG";
            LOL_CHALLENGES_V1.GET_PERCENTILES = "LOL_CHALLENGES_V1.GET_PERCENTILES";
            LOL_CHALLENGES_V1.GET_CONFIG_BY_ID = "LOL_CHALLENGES_V1.GET_CONFIG_BY_ID";
            LOL_CHALLENGES_V1.GET_LEADERBOARD_BY_ID = "LOL_CHALLENGES_V1.GET_LEADERBOARD_BY_ID";
            LOL_CHALLENGES_V1.GET_PERCENTILES_BY_ID = "LOL_CHALLENGES_V1.GET_PERCENTILES_BY_ID";
            LOL_CHALLENGES_V1.GET_PLAYER_DATA_BY_PUUID = "LOL_CHALLENGES_V1.GET_PLAYER_DATA_BY_PUUID";
        })(LOL_CHALLENGES_V1 = METHOD_KEY.LOL_CHALLENGES_V1 || (METHOD_KEY.LOL_CHALLENGES_V1 = {}));
        let LOL_RSO_MATCH_V1;
        (function (LOL_RSO_MATCH_V1) {
            LOL_RSO_MATCH_V1.GET_IDS_BY_ACCESS_TOKEN = "LOL_RSO_MATCH_V1.GET_IDS_BY_ACCESS_TOKEN";
            LOL_RSO_MATCH_V1.GET_MATCH_BY_ID = "LOL_RSO_MATCH_V1.GET_MATCH_BY_ID";
            LOL_RSO_MATCH_V1.GET_MATCH_TIMELINE_BY_ID = "LOL_RSO_MATCH_V1.GET_MATCH_TIMELINE_BY_ID";
        })(LOL_RSO_MATCH_V1 = METHOD_KEY.LOL_RSO_MATCH_V1 || (METHOD_KEY.LOL_RSO_MATCH_V1 = {}));
        let LOL_STATUS_V4;
        (function (LOL_STATUS_V4) {
            LOL_STATUS_V4.GET_PLATFORM_DATA = "LOL_STATUS_V4.GET_PLATFORM_DATA";
        })(LOL_STATUS_V4 = METHOD_KEY.LOL_STATUS_V4 || (METHOD_KEY.LOL_STATUS_V4 = {}));
        let LOR_DECK_V1;
        (function (LOR_DECK_V1) {
            LOR_DECK_V1.GET_DECKS_FOR_PLAYER = "LOR_DECK_V1.GET_DECKS_FOR_PLAYER";
            LOR_DECK_V1.POST_CREATE_DECK_FOR_PLAYER = "LOR_DECK_V1.POST_CREATE_DECK_FOR_PLAYER";
        })(LOR_DECK_V1 = METHOD_KEY.LOR_DECK_V1 || (METHOD_KEY.LOR_DECK_V1 = {}));
        let LOR_INVENTORY_V1;
        (function (LOR_INVENTORY_V1) {
            LOR_INVENTORY_V1.GET_CARDS_OWNED_BY_PLAYER = "LOR_INVENTORY_V1.GET_CARDS_OWNED_BY_PLAYER";
        })(LOR_INVENTORY_V1 = METHOD_KEY.LOR_INVENTORY_V1 || (METHOD_KEY.LOR_INVENTORY_V1 = {}));
        let LOR_MATCH_V1;
        (function (LOR_MATCH_V1) {
            LOR_MATCH_V1.GET_MATCH_IDS_BY_PUUID = "LOR_MATCH_V1.GET_MATCH_IDS_BY_PUUID";
            LOR_MATCH_V1.GET_MATCH_BY_ID = "LOR_MATCH_V1.GET_MATCH_BY_ID";
        })(LOR_MATCH_V1 = METHOD_KEY.LOR_MATCH_V1 || (METHOD_KEY.LOR_MATCH_V1 = {}));
        let LOR_RANKED_V1;
        (function (LOR_RANKED_V1) {
            LOR_RANKED_V1.GET_MASTER_TIER = "LOR_RANKED_V1.GET_MASTER_TIER";
        })(LOR_RANKED_V1 = METHOD_KEY.LOR_RANKED_V1 || (METHOD_KEY.LOR_RANKED_V1 = {}));
        let LOR_STATUS_V1;
        (function (LOR_STATUS_V1) {
            LOR_STATUS_V1.GET_PLATFORM_DATA = "LOR_STATUS_V1.GET_PLATFORM_DATA";
        })(LOR_STATUS_V1 = METHOD_KEY.LOR_STATUS_V1 || (METHOD_KEY.LOR_STATUS_V1 = {}));
        let MATCH_V5;
        (function (MATCH_V5) {
            MATCH_V5.GET_IDS_BY_PUUID = "MATCH_V5.GET_IDS_BY_PUUID";
            MATCH_V5.GET_MATCH_BY_ID = "MATCH_V5.GET_MATCH_BY_ID";
            MATCH_V5.GET_MATCH_TIMELINE_BY_ID = "MATCH_V5.GET_MATCH_TIMELINE_BY_ID";
        })(MATCH_V5 = METHOD_KEY.MATCH_V5 || (METHOD_KEY.MATCH_V5 = {}));
        let SPECTATOR_TFT_V5;
        (function (SPECTATOR_TFT_V5) {
            SPECTATOR_TFT_V5.GET_GAME_BY_PUUID = "SPECTATOR_TFT_V5.GET_GAME_BY_PUUID";
            SPECTATOR_TFT_V5.GET_FEATURED_GAMES = "SPECTATOR_TFT_V5.GET_FEATURED_GAMES";
        })(SPECTATOR_TFT_V5 = METHOD_KEY.SPECTATOR_TFT_V5 || (METHOD_KEY.SPECTATOR_TFT_V5 = {}));
        let SPECTATOR_V5;
        (function (SPECTATOR_V5) {
            SPECTATOR_V5.GET_GAME_BY_SUMMONER_ID = "SPECTATOR_V5.GET_GAME_BY_SUMMONER_ID";
            SPECTATOR_V5.GET_FEATURED_GAMES = "SPECTATOR_V5.GET_FEATURED_GAMES";
        })(SPECTATOR_V5 = METHOD_KEY.SPECTATOR_V5 || (METHOD_KEY.SPECTATOR_V5 = {}));
        let SUMMONER_V4;
        (function (SUMMONER_V4) {
            SUMMONER_V4.GET_BY_RSO_PUUID = "SUMMONER_V4.GET_BY_RSO_PUUID";
            SUMMONER_V4.GET_BY_ACCOUNT_ID = "SUMMONER_V4.GET_BY_ACCOUNT_ID";
            SUMMONER_V4.GET_BY_PUUID = "SUMMONER_V4.GET_BY_PUUID";
            SUMMONER_V4.GET_BY_SUMMONER_ID = "SUMMONER_V4.GET_BY_SUMMONER_ID";
            SUMMONER_V4.GET_BY_ACCESS_TOKEN = "SUMMONER_V4.GET_BY_ACCESS_TOKEN";
        })(SUMMONER_V4 = METHOD_KEY.SUMMONER_V4 || (METHOD_KEY.SUMMONER_V4 = {}));
        let TFT_LEAGUE_V1;
        (function (TFT_LEAGUE_V1) {
            TFT_LEAGUE_V1.GET_CHALLENGER = "TFT_LEAGUE_V1.GET_CHALLENGER";
            TFT_LEAGUE_V1.GET_ENTRIES_BY_PUUID = "TFT_LEAGUE_V1.GET_ENTRIES_BY_PUUID";
            TFT_LEAGUE_V1.GET_ALL_ENTRIES = "TFT_LEAGUE_V1.GET_ALL_ENTRIES";
            TFT_LEAGUE_V1.GET_GRANDMASTER = "TFT_LEAGUE_V1.GET_GRANDMASTER";
            TFT_LEAGUE_V1.GET_LEAGUE_BY_ID = "TFT_LEAGUE_V1.GET_LEAGUE_BY_ID";
            TFT_LEAGUE_V1.GET_MASTER = "TFT_LEAGUE_V1.GET_MASTER";
            TFT_LEAGUE_V1.GET_TOP_RATED_LADDER_BY_QUEUE = "TFT_LEAGUE_V1.GET_TOP_RATED_LADDER_BY_QUEUE";
        })(TFT_LEAGUE_V1 = METHOD_KEY.TFT_LEAGUE_V1 || (METHOD_KEY.TFT_LEAGUE_V1 = {}));
        let TFT_MATCH_V1;
        (function (TFT_MATCH_V1) {
            TFT_MATCH_V1.GET_MATCH_IDS_BY_PUUID = "TFT_MATCH_V1.GET_MATCH_IDS_BY_PUUID";
            TFT_MATCH_V1.GET_MATCH_BY_ID = "TFT_MATCH_V1.GET_MATCH_BY_ID";
        })(TFT_MATCH_V1 = METHOD_KEY.TFT_MATCH_V1 || (METHOD_KEY.TFT_MATCH_V1 = {}));
        let TFT_STATUS_V1;
        (function (TFT_STATUS_V1) {
            TFT_STATUS_V1.GET_PLATFORM_DATA = "TFT_STATUS_V1.GET_PLATFORM_DATA";
        })(TFT_STATUS_V1 = METHOD_KEY.TFT_STATUS_V1 || (METHOD_KEY.TFT_STATUS_V1 = {}));
        let TFT_SUMMONER_V1;
        (function (TFT_SUMMONER_V1) {
            TFT_SUMMONER_V1.GET_BY_ACCOUNT_ID = "TFT_SUMMONER_V1.GET_BY_ACCOUNT_ID";
            TFT_SUMMONER_V1.GET_BY_ACCESS_TOKEN = "TFT_SUMMONER_V1.GET_BY_ACCESS_TOKEN";
            TFT_SUMMONER_V1.GET_BY_PUUID = "TFT_SUMMONER_V1.GET_BY_PUUID";
            TFT_SUMMONER_V1.GET_BY_SUMMONER_ID = "TFT_SUMMONER_V1.GET_BY_SUMMONER_ID";
        })(TFT_SUMMONER_V1 = METHOD_KEY.TFT_SUMMONER_V1 || (METHOD_KEY.TFT_SUMMONER_V1 = {}));
        let TOURNAMENT_STUB_V5;
        (function (TOURNAMENT_STUB_V5) {
            TOURNAMENT_STUB_V5.POST_CREATE_CODES = "TOURNAMENT_STUB_V5.POST_CREATE_CODES";
            TOURNAMENT_STUB_V5.GET_TOURNAMENT_BY_CODE = "TOURNAMENT_STUB_V5.GET_TOURNAMENT_BY_CODE";
            TOURNAMENT_STUB_V5.GET_LOBBY_EVENTS_BY_TOURNAMENT_CODE = "TOURNAMENT_STUB_V5.GET_LOBBY_EVENTS_BY_TOURNAMENT_CODE";
            TOURNAMENT_STUB_V5.POST_CREATE_PROVIDER = "TOURNAMENT_STUB_V5.POST_CREATE_PROVIDER";
            TOURNAMENT_STUB_V5.POST_CREATE_TOURNAMENT = "TOURNAMENT_STUB_V5.POST_CREATE_TOURNAMENT";
        })(TOURNAMENT_STUB_V5 = METHOD_KEY.TOURNAMENT_STUB_V5 || (METHOD_KEY.TOURNAMENT_STUB_V5 = {}));
        let TOURNAMENT_V5;
        (function (TOURNAMENT_V5) {
            TOURNAMENT_V5.POST_CREATE_CODES = "TOURNAMENT_V5.POST_CREATE_CODES";
            TOURNAMENT_V5.GET_TOURNAMENT_BY_CODE = "TOURNAMENT_V5.GET_TOURNAMENT_BY_CODE";
            TOURNAMENT_V5.PUT_TOURNAMENT_CODE = "TOURNAMENT_V5.PUT_TOURNAMENT_CODE";
            TOURNAMENT_V5.GET_TOURNAMENT_GAME_DETAILS = "TOURNAMENT_V5.GET_TOURNAMENT_GAME_DETAILS";
            TOURNAMENT_V5.GET_LOBBY_EVENTS_BY_TOURNAMENT_CODE = "TOURNAMENT_V5.GET_LOBBY_EVENTS_BY_TOURNAMENT_CODE";
            TOURNAMENT_V5.POST_CREATE_PROVIDER = "TOURNAMENT_V5.POST_CREATE_PROVIDER";
            TOURNAMENT_V5.POST_CREATE_TOURNAMENT = "TOURNAMENT_V5.POST_CREATE_TOURNAMENT";
        })(TOURNAMENT_V5 = METHOD_KEY.TOURNAMENT_V5 || (METHOD_KEY.TOURNAMENT_V5 = {}));
        let VAL_CONSOLE_MATCH_V1;
        (function (VAL_CONSOLE_MATCH_V1) {
            VAL_CONSOLE_MATCH_V1.GET_MATCH_BY_ID = "VAL_CONSOLE_MATCH_V1.GET_MATCH_BY_ID";
            VAL_CONSOLE_MATCH_V1.GET_MATCHLIST_BY_PUUID = "VAL_CONSOLE_MATCH_V1.GET_MATCHLIST_BY_PUUID";
            VAL_CONSOLE_MATCH_V1.GET_RECENT_MATCHES_BY_QUEUE = "VAL_CONSOLE_MATCH_V1.GET_RECENT_MATCHES_BY_QUEUE";
        })(VAL_CONSOLE_MATCH_V1 = METHOD_KEY.VAL_CONSOLE_MATCH_V1 || (METHOD_KEY.VAL_CONSOLE_MATCH_V1 = {}));
        let VAL_CONTENT_V1;
        (function (VAL_CONTENT_V1) {
            VAL_CONTENT_V1.GET_CONTENT = "VAL_CONTENT_V1.GET_CONTENT";
        })(VAL_CONTENT_V1 = METHOD_KEY.VAL_CONTENT_V1 || (METHOD_KEY.VAL_CONTENT_V1 = {}));
        let VAL_CONSOLE_RANKED_V1;
        (function (VAL_CONSOLE_RANKED_V1) {
            VAL_CONSOLE_RANKED_V1.GET_LEADERBOARD_BY_QUEUE = "VAL_CONSOLE_RANKED_V1.GET_LEADERBOARD_BY_QUEUE";
        })(VAL_CONSOLE_RANKED_V1 = METHOD_KEY.VAL_CONSOLE_RANKED_V1 || (METHOD_KEY.VAL_CONSOLE_RANKED_V1 = {}));
        let VAL_MATCH_V1;
        (function (VAL_MATCH_V1) {
            VAL_MATCH_V1.GET_MATCH_BY_ID = "VAL_MATCH_V1.GET_MATCH_BY_ID";
            VAL_MATCH_V1.GET_MATCHLIST_BY_PUUID = "VAL_MATCH_V1.GET_MATCHLIST_BY_PUUID";
            VAL_MATCH_V1.GET_RECENT_MATCHES_BY_QUEUE = "VAL_MATCH_V1.GET_RECENT_MATCHES_BY_QUEUE";
        })(VAL_MATCH_V1 = METHOD_KEY.VAL_MATCH_V1 || (METHOD_KEY.VAL_MATCH_V1 = {}));
        let VAL_RANKED_V1;
        (function (VAL_RANKED_V1) {
            VAL_RANKED_V1.GET_LEADERBOARD_BY_QUEUE = "VAL_RANKED_V1.GET_LEADERBOARD_BY_QUEUE";
        })(VAL_RANKED_V1 = METHOD_KEY.VAL_RANKED_V1 || (METHOD_KEY.VAL_RANKED_V1 = {}));
        let VAL_STATUS_V1;
        (function (VAL_STATUS_V1) {
            VAL_STATUS_V1.GET_PLATFORM_DATA = "VAL_STATUS_V1.GET_PLATFORM_DATA";
        })(VAL_STATUS_V1 = METHOD_KEY.VAL_STATUS_V1 || (METHOD_KEY.VAL_STATUS_V1 = {}));
    })(METHOD_KEY = RiotAPITypes.METHOD_KEY || (RiotAPITypes.METHOD_KEY = {}));
    let LolChallenges;
    (function (LolChallenges) {
        let lolChallengeState;
        (function (lolChallengeState) {
            lolChallengeState["DISABLED"] = "DISABLED";
            lolChallengeState["HIDDEN"] = "HIDDEN";
            lolChallengeState["ENABLED"] = "ENABLED";
            lolChallengeState["ARCHIVED"] = "ARCHIVED";
        })(lolChallengeState = LolChallenges.lolChallengeState || (LolChallenges.lolChallengeState = {}));
        let lolChallengeTracking;
        (function (lolChallengeTracking) {
            lolChallengeTracking["LIFETIME"] = "LIFETIME";
            lolChallengeTracking["SEASON"] = "SEASON";
        })(lolChallengeTracking = LolChallenges.lolChallengeTracking || (LolChallenges.lolChallengeTracking = {}));
        let lolChallengeCategory;
        (function (lolChallengeCategory) {
            lolChallengeCategory["VETERANCY"] = "VETERANCY";
            lolChallengeCategory["IMAGINATION"] = "IMAGINATION";
            lolChallengeCategory["COLLECTION"] = "COLLECTION";
            lolChallengeCategory["EXPERTISE"] = "EXPERTISE";
            lolChallengeCategory["TEAMWORK"] = "TEAMWORK";
        })(lolChallengeCategory = LolChallenges.lolChallengeCategory || (LolChallenges.lolChallengeCategory = {}));
    })(LolChallenges = RiotAPITypes.LolChallenges || (RiotAPITypes.LolChallenges = {}));
    let MatchV5;
    (function (MatchV5) {
        let MatchType;
        (function (MatchType) {
            MatchType["Ranked"] = "ranked";
            MatchType["Normal"] = "normal";
            MatchType["Tourney"] = "tourney";
            MatchType["Tutorial"] = "tutorial";
        })(MatchType = MatchV5.MatchType || (MatchV5.MatchType = {}));
    })(MatchV5 = RiotAPITypes.MatchV5 || (RiotAPITypes.MatchV5 = {}));
    let TftLeague;
    (function (TftLeague) {
        let RatedTier;
        (function (RatedTier) {
            RatedTier["ORANGE"] = "ORANGE";
            RatedTier["PURPLE"] = "PURPLE";
            RatedTier["BLUE"] = "BLUE";
            RatedTier["GREEN"] = "GREEN";
            RatedTier["GRAY"] = "GRAY";
        })(RatedTier = TftLeague.RatedTier || (TftLeague.RatedTier = {}));
    })(TftLeague = RiotAPITypes.TftLeague || (RiotAPITypes.TftLeague = {}));
    let TournamentV5;
    (function (TournamentV5) {
        let REGION;
        (function (REGION) {
            REGION["BR"] = "BR";
            REGION["EUNE"] = "EUNE";
            REGION["EUW"] = "EUW";
            REGION["JP"] = "JP";
            REGION["LAN"] = "LAN";
            REGION["LAS"] = "LAS";
            REGION["NA"] = "NA";
            REGION["OCE"] = "OCE";
            REGION["PBE"] = "PBE";
            REGION["RU"] = "RU";
            REGION["TR"] = "TR";
            REGION["KR"] = "KR";
        })(REGION = TournamentV5.REGION || (TournamentV5.REGION = {}));
        let PICKTYPE;
        (function (PICKTYPE) {
            PICKTYPE["BLIND_PICK"] = "BLIND_PICK";
            PICKTYPE["DRAFT_MODE"] = "DRAFT_MODE";
            PICKTYPE["ALL_RANDOM"] = "ALL_RANDOM";
            PICKTYPE["TOURNAMENT_DRAFT"] = "TOURNAMENT_DRAFT";
        })(PICKTYPE = TournamentV5.PICKTYPE || (TournamentV5.PICKTYPE = {}));
        let MAPTYPE;
        (function (MAPTYPE) {
            MAPTYPE["SUMMONERS_RIFT"] = "SUMMONERS_RIFT";
            MAPTYPE["HOWLING_ABYSS"] = "HOWLING_ABYSS";
        })(MAPTYPE = TournamentV5.MAPTYPE || (TournamentV5.MAPTYPE = {}));
        let SPECTATORTYPE;
        (function (SPECTATORTYPE) {
            SPECTATORTYPE["NONE"] = "NONE";
            SPECTATORTYPE["LOBBYONLY"] = "LOBBYONLY";
            SPECTATORTYPE["ALL"] = "ALL";
        })(SPECTATORTYPE = TournamentV5.SPECTATORTYPE || (TournamentV5.SPECTATORTYPE = {}));
    })(TournamentV5 = RiotAPITypes.TournamentV5 || (RiotAPITypes.TournamentV5 = {}));
    let DDragon;
    (function (DDragon) {
        let REALM;
        (function (REALM) {
            REALM["NA"] = "na";
            REALM["EUW"] = "euw";
            REALM["EUNE"] = "eune";
            REALM["BR"] = "br";
            REALM["JP"] = "jp";
            REALM["KR"] = "kr";
            REALM["OCE"] = "oce";
            REALM["LAN"] = "lan";
            REALM["LAS"] = "las";
            REALM["RU"] = "ru";
            REALM["TR"] = "tr";
        })(REALM = DDragon.REALM || (DDragon.REALM = {}));
        let LOCALE;
        (function (LOCALE) {
            LOCALE["cs_CZ"] = "cs_CZ";
            LOCALE["el_GR"] = "el_GR";
            LOCALE["pl_PL"] = "pl_PL";
            LOCALE["ro_RO"] = "ro_RO";
            LOCALE["hu_HU"] = "hu_HU";
            LOCALE["en_GB"] = "en_GB";
            LOCALE["de_DE"] = "de_DE";
            LOCALE["es_ES"] = "es_ES";
            LOCALE["it_IT"] = "it_IT";
            LOCALE["fr_FR"] = "fr_FR";
            LOCALE["ja_JP"] = "ja_JP";
            LOCALE["ko_KR"] = "ko_KR";
            LOCALE["es_MX"] = "es_MX";
            LOCALE["es_AR"] = "es_AR";
            LOCALE["pt_BR"] = "pt_BR";
            LOCALE["en_US"] = "en_US";
            LOCALE["en_AU"] = "en_AU";
            LOCALE["ru_RU"] = "ru_RU";
            LOCALE["tr_TR"] = "tr_TR";
            LOCALE["ms_MY"] = "ms_MY";
            LOCALE["en_PH"] = "en_PH";
            LOCALE["en_SG"] = "en_SG";
            LOCALE["th_TH"] = "th_TH";
            LOCALE["vi_VN"] = "vi_VN";
            LOCALE["id_ID"] = "id_ID";
            LOCALE["zh_MY"] = "zh_MY";
            LOCALE["zh_CN"] = "zh_CN";
            LOCALE["zh_TW"] = "zh_TW";
        })(LOCALE = DDragon.LOCALE || (DDragon.LOCALE = {}));
    })(DDragon = RiotAPITypes.DDragon || (RiotAPITypes.DDragon = {}));
})(RiotAPITypes || (exports.RiotAPITypes = RiotAPITypes = {}));
