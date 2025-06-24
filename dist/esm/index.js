import { HOST, METHODS, PlatformId, RiotRateLimiter, } from "@ballaual/riot-rate-limiter";
import debug from "debug";
import { compile } from "path-to-regexp";
import qs from "querystring";
import { RiotAPITypes } from "./@types";
import { MemoryCache, RedisCache } from "./cache";
import { DDragon } from "./ddragon";
import { regionToCluster } from "./utils";
const debugCache = debug("riotapi:cache");
const createHost = compile(HOST, { encode: encodeURIComponent });
const getPath = (key) => {
    let path = METHODS;
    const keys = key.split(".");
    for (const subKey of keys) {
        if (typeof path === "string")
            break;
        // @ts-expect-error typing for path[subkey] is hard
        path = path[subKey];
    }
    if (typeof path !== "string")
        throw new Error(`Incorrect path: ${key} results in ${path}`);
    return path;
};
export { DDragon, PlatformId, RiotAPITypes, regionToCluster };
export class RiotAPI {
    constructor(token, config = {}) {
        this.config = {
            debug: false,
        };
        if (!token)
            throw new Error("token is missing");
        this.token = token;
        this.config = { ...this.config, ...config };
        this.riotRateLimiter = new RiotRateLimiter({
            concurrency: 10,
            datastore: this.config.cache?.cacheType || "local",
            redis: this.config.cache?.client,
        });
        this.ddragon = new DDragon();
        if (this.config.cache?.cacheType === "local")
            this.cache = new MemoryCache();
        else if (this.config.cache?.cacheType === "ioredis")
            this.cache = new RedisCache(this.config.cache?.client);
    }
    getHeaders(headers) {
        return headers || { "X-Riot-Token": this.token };
    }
    getOptions({ body, method, headers, } = {}) {
        return {
            headers: this.getHeaders(headers),
            body: body ? JSON.stringify(body) : undefined,
            method,
        };
    }
    getJobOptions({ id, priority, expiration, } = { id: new Date().toString() }) {
        return { id, priority, expiration };
    }
    async checkCache(key, url) {
        if (this.cache && this.config.cache?.ttls?.byMethod[key]) {
            const cacheValue = (await this.cache.get(url));
            if (cacheValue)
                debugCache("Cache Hit", key, url);
            return cacheValue;
        }
        return null;
    }
    async setCache(key, url, data) {
        if (this.cache && this.config.cache?.ttls?.byMethod[key]) {
            debugCache("Setting", key, url, this.config.cache.ttls.byMethod[key]);
            await this.cache.set(url, data, this.config.cache.ttls.byMethod[key]);
        }
    }
    async request(platformId, methodKey, pathData, options) {
        const path = getPath(methodKey);
        const createPath = compile(path, { encode: encodeURIComponent });
        let url = `https://${createHost({ platformId })}${createPath(pathData)}`;
        if (options?.params)
            url += `?${qs.encode(options.params)}`;
        const cacheValue = await this.checkCache(methodKey, url);
        if (cacheValue)
            return cacheValue;
        const resp = await this.riotRateLimiter.execute({ url, options: this.getOptions(options) }, this.getJobOptions(options));
        await this.setCache(methodKey, url, resp);
        return resp;
    }
    get account() {
        return {
            getByPUUID: ({ region, puuid, }) => this.request(region, RiotAPITypes.METHOD_KEY.ACCOUNT_V1.GET_BY_PUUID, { puuid }, { id: `${region}.account.getByPUUID.${puuid}`, priority: 4 }),
            getByRiotId: ({ region, gameName, tagLine, }) => this.request(region, RiotAPITypes.METHOD_KEY.ACCOUNT_V1.GET_BY_RIOT_ID, { gameName, tagLine }, {
                id: `${region}.account.getByRiotId.${gameName}.${tagLine}`,
                priority: 4,
            }),
            getByAccessToken: ({ region, accessToken, }) => this.request(region, RiotAPITypes.METHOD_KEY.ACCOUNT_V1.GET_BY_ACCESS_TOKEN, {}, {
                id: `${region}.account.getByAccessToken`,
                headers: { Authorization: `Bearer ${accessToken}` },
            }),
            getActiveShardForPlayer: ({ region, game, puuid, }) => this.request(region, RiotAPITypes.METHOD_KEY.ACCOUNT_V1.GET_ACTIVE_SHARD_FOR_PLAYER, { game, puuid }, { id: `${region}.account.getActiveShardForPlayer.${game}.${puuid}` }),
        };
    }
    get championMastery() {
        return {
            getAllChampions: ({ region, summonerId, }) => this.request(region, RiotAPITypes.METHOD_KEY.CHAMPION_MASTERY_V4.GET_ALL_CHAMPIONS, { summonerId }, { id: `${region}.championMastery.getAllChampions.${summonerId}` }),
            getChampion: ({ region, championId, summonerId, }) => this.request(region, RiotAPITypes.METHOD_KEY.CHAMPION_MASTERY_V4.GET_CHAMPION_MASTERY, { championId, summonerId }, {
                id: `${region}.championMastery.getChampion.${championId}.${summonerId}`,
            }),
            getTopChampions: ({ region, summonerId, params, }) => this.request(region, RiotAPITypes.METHOD_KEY.CHAMPION_MASTERY_V4.GET_TOP_CHAMPIONS, { summonerId }, {
                id: `${region}.championMastery.getTopChampions.${summonerId}`,
                params,
            }),
            getMasteryScore: ({ region, summonerId, }) => this.request(region, RiotAPITypes.METHOD_KEY.CHAMPION_MASTERY_V4.GET_CHAMPION_MASTERY_SCORE, { summonerId }, { id: `${region}.championMastery.getMasteryScore.${summonerId}` }),
        };
    }
    get champion() {
        return {
            getRotations: ({ region, }) => this.request(region, RiotAPITypes.METHOD_KEY.CHAMPION_V3.GET_CHAMPION_ROTATIONS, {}, { id: `${region}.champion.getRotations` }),
        };
    }
    get clash() {
        return {
            getPlayersByPUUID: ({ region, puuid, }) => this.request(region, RiotAPITypes.METHOD_KEY.CLASH_V1.GET_PLAYERS_BY_PUUID, { puuid }, { id: `${region}.clash.getPlayersByPUUID.${puuid}` }),
            getTeamById: ({ region, teamId, }) => this.request(region, RiotAPITypes.METHOD_KEY.CLASH_V1.GET_TEAM, { teamId }, { id: `${region}.clash.getTeamById.${teamId}` }),
            getTournaments: ({ region, }) => this.request(region, RiotAPITypes.METHOD_KEY.CLASH_V1.GET_TOURNAMENTS, {}, { id: `${region}.clash.getTournaments` }),
            getTournamentById: ({ region, tournamentId, }) => this.request(region, RiotAPITypes.METHOD_KEY.CLASH_V1.GET_TOURNAMENT, { tournamentId }, { id: `${region}.clash.getTournamentById.${tournamentId}` }),
            getTournamentByTeamId: ({ region, teamId, }) => this.request(region, RiotAPITypes.METHOD_KEY.CLASH_V1.GET_TOURNAMENT_TEAM, { teamId }, { id: `${region}.clash.getTournamentByTeamId.${teamId}` }),
        };
    }
    get leagueExp() {
        return {
            getLeagueEntries: ({ region, queue, tier, division, }) => this.request(region, RiotAPITypes.METHOD_KEY.LEAGUE_EXP_V4.GET_LEAGUE_ENTRIES, { queue, tier, division }, {
                id: `${region}.leagueExp.getLeagueEntries.${queue}.${tier}.${division}`,
            }),
        };
    }
    get league() {
        return {
            getChallengerByQueue: ({ region, queue, }) => this.request(region, RiotAPITypes.METHOD_KEY.LEAGUE_V4.GET_CHALLENGER_BY_QUEUE, { queue }, {
                id: `${region}.league.getChallengerByQueue.${queue}`,
            }),
            getEntriesByPUUID: ({ region, puuid, }) => this.request(region, RiotAPITypes.METHOD_KEY.LEAGUE_V4.GET_ENTRIES_BY_PUUID, { puuid }, {
                id: `${region}.league.getEntriesByPUUID.${puuid}`,
            }),
            getAllEntries: ({ region, queue, tier, division, }) => this.request(region, RiotAPITypes.METHOD_KEY.LEAGUE_V4.GET_ALL_ENTRIES, { queue, tier, division }, {
                id: `${region}.league.getAllEntries.${queue}.${tier}.${division}`,
            }),
            getGrandmasterByQueue: ({ region, queue, }) => this.request(region, RiotAPITypes.METHOD_KEY.LEAGUE_V4.GET_GRANDMASTER_BY_QUEUE, { queue }, {
                id: `${region}.league.getGrandmasterByQueue.${queue}`,
            }),
            getById: ({ region, leagueId, }) => this.request(region, RiotAPITypes.METHOD_KEY.LEAGUE_V4.GET_LEAGUE_BY_ID, { leagueId }, {
                id: `${region}.league.getById.${leagueId}`,
            }),
            getMasterByQueue: ({ region, queue, }) => this.request(region, RiotAPITypes.METHOD_KEY.LEAGUE_V4.GET_MASTER_BY_QUEUE, { queue }, {
                id: `${region}.league.getMasterByQueue.${queue}`,
            }),
        };
    }
    get lolChallenges() {
        return {
            getConfig: ({ region, }) => this.request(region, RiotAPITypes.METHOD_KEY.LOL_CHALLENGES_V1.GET_CONFIG, {}, { id: `${region}.lolChallenges.getConfig` }),
            getPercentiles: ({ region, }) => this.request(region, RiotAPITypes.METHOD_KEY.LOL_CHALLENGES_V1.GET_PERCENTILES, {}, { id: `${region}.lolChallenges.getPercentiles` }),
            getConfigById: ({ region, challengeId, }) => this.request(region, RiotAPITypes.METHOD_KEY.LOL_CHALLENGES_V1.GET_CONFIG_BY_ID, { challengeId }, { id: `${region}.lolChallenges.getConfigById.${challengeId}` }),
            getLeaderboardById: ({ region, challengeId, params, }) => this.request(region, RiotAPITypes.METHOD_KEY.LOL_CHALLENGES_V1.GET_LEADERBOARD_BY_ID, { challengeId }, {
                id: `${region}.lolChallenges.getLeaderboardById.${challengeId}`,
                params,
            }),
            getPercentilesById: ({ region, challengeId, }) => this.request(region, RiotAPITypes.METHOD_KEY.LOL_CHALLENGES_V1.GET_PERCENTILES_BY_ID, { challengeId }, { id: `${region}.lolChallenges.getPercentilesById.${challengeId}` }),
            getPlayerDataByPUUID: ({ region, puuid, }) => this.request(region, RiotAPITypes.METHOD_KEY.LOL_CHALLENGES_V1.GET_PLAYER_DATA_BY_PUUID, { puuid }, { id: `${region}.lolChallenges.getPlayerDataByPUUID.${puuid}` }),
        };
    }
    get lorDeck() {
        return {
            getDecksForPlayer: ({ region, accessToken, }) => this.request(region, RiotAPITypes.METHOD_KEY.LOR_DECK_V1.GET_DECKS_FOR_PLAYER, {}, {
                id: `${region}.lorDeck.getDecksForPlayer`,
                headers: { Authorization: `Bearer ${accessToken}` },
            }),
            createDeck: ({ region, accessToken, body, }) => this.request(region, RiotAPITypes.METHOD_KEY.LOR_DECK_V1.POST_CREATE_DECK_FOR_PLAYER, {}, {
                id: `${region}.lorDeck.createDeck`,
                body,
                method: "POST",
                headers: { Authorization: `Bearer ${accessToken}` },
            }),
        };
    }
    get lorInventory() {
        return {
            getCardsOwnedByPlayer: ({ region, accessToken, }) => this.request(region, RiotAPITypes.METHOD_KEY.LOR_INVENTORY_V1.GET_CARDS_OWNED_BY_PLAYER, {}, {
                id: `${region}.lorInventory.getCardsOwnedByPlayer`,
                headers: { Authorization: `Bearer ${accessToken}` },
            }),
        };
    }
    get lorMatch() {
        return {
            getMatchIdsByPUUID: ({ region, puuid, }) => this.request(region, RiotAPITypes.METHOD_KEY.LOR_MATCH_V1.GET_MATCH_IDS_BY_PUUID, { puuid }, { id: `${region}.lorMatch.getMatchIdsByPUUID.${puuid}` }),
            getById: ({ region, matchId, }) => this.request(region, RiotAPITypes.METHOD_KEY.LOR_MATCH_V1.GET_MATCH_BY_ID, { matchId }, { id: `${region}.lorMatch.getById.${matchId}` }),
        };
    }
    get lorRanked() {
        return {
            getMasterTier: ({ region, }) => this.request(region, RiotAPITypes.METHOD_KEY.LOR_RANKED_V1.GET_MASTER_TIER, {}, { id: `${region}.lorRanked.getMasterTier` }),
        };
    }
    get matchV5() {
        return {
            getIdsByPuuid: ({ cluster, puuid, params, }) => this.request(cluster, RiotAPITypes.METHOD_KEY.MATCH_V5.GET_IDS_BY_PUUID, { puuid }, {
                id: `${cluster}.matchv5.getIdsByPuuid.${puuid}`,
                params,
            }),
            getMatchById: ({ cluster, matchId, }) => this.request(cluster, RiotAPITypes.METHOD_KEY.MATCH_V5.GET_MATCH_BY_ID, { matchId }, {
                id: `${cluster}.matchv5.getMatchById.${matchId}`,
            }),
            getMatchTimelineById: ({ cluster, matchId, }) => this.request(cluster, RiotAPITypes.METHOD_KEY.MATCH_V5.GET_MATCH_TIMELINE_BY_ID, { matchId }, {
                id: `${cluster}.matchv5.getMatchTimelineById.${matchId}`,
            }),
        };
    }
    get spectatorTftV5() {
        return {
            getByPuuid: ({ region, puuid, }) => this.request(region, RiotAPITypes.METHOD_KEY.SPECTATOR_TFT_V5.GET_GAME_BY_PUUID, { puuid }, { id: `${region}.spectatorTftV5.getByPuuidId.${puuid}` }),
            getFeaturedGames: ({ region, }) => this.request(region, RiotAPITypes.METHOD_KEY.SPECTATOR_TFT_V5.GET_FEATURED_GAMES, {}, { id: `${region}.spectatorTftV5.getFeaturedGames` }),
        };
    }
    get spectator() {
        return {
            getBySummonerId: ({ region, summonerId, }) => this.request(region, RiotAPITypes.METHOD_KEY.SPECTATOR_V5.GET_GAME_BY_SUMMONER_ID, { summonerId }, { id: `${region}.spectator.getBySummonerId.${summonerId}` }),
            getFeaturedGames: ({ region, }) => this.request(region, RiotAPITypes.METHOD_KEY.SPECTATOR_V5.GET_FEATURED_GAMES, {}, { id: `${region}.spectator.getFeaturedGames` }),
        };
    }
    get summoner() {
        return {
            getByRsoPUUID: ({ region, rsoPuuid, }) => this.request(region, RiotAPITypes.METHOD_KEY.SUMMONER_V4.GET_BY_RSO_PUUID, { rsoPuuid }, { id: `${region}.summoner.getByRsoPUUID.${rsoPuuid}` }),
            getByAccountId: ({ region, accountId, }) => this.request(region, RiotAPITypes.METHOD_KEY.SUMMONER_V4.GET_BY_ACCOUNT_ID, { accountId }, { id: `${region}.summoner.getByAccountId.${accountId}` }),
            getByPUUID: ({ region, puuid, }) => this.request(region, RiotAPITypes.METHOD_KEY.SUMMONER_V4.GET_BY_PUUID, { puuid }, { id: `${region}.summoner.getByPUUID.${puuid}` }),
            getBySummonerId: ({ region, summonerId, }) => this.request(region, RiotAPITypes.METHOD_KEY.SUMMONER_V4.GET_BY_SUMMONER_ID, { summonerId }, { id: `${region}.summoner.getBySummonerId.${summonerId}` }),
            getByAccessToken: ({ region, accessToken, }) => this.request(region, RiotAPITypes.METHOD_KEY.SUMMONER_V4.GET_BY_ACCESS_TOKEN, {}, {
                id: `${region}.summoner.getByAccessToken`,
                headers: { Authorization: `Bearer ${accessToken}` },
            }),
        };
    }
    get tftLeague() {
        return {
            getChallenger: ({ region, }) => this.request(region, RiotAPITypes.METHOD_KEY.TFT_LEAGUE_V1.GET_CHALLENGER, {}, { id: `${region}.tftLeague.getChallenger` }),
            getEntriesByPUUID: ({ region, puuid, }) => this.request(region, RiotAPITypes.METHOD_KEY.TFT_LEAGUE_V1.GET_ENTRIES_BY_PUUID, { puuid }, { id: `${region}.tftLeague.getEntriesBypuuid.${puuid}` }),
            getAllEntries: ({ region, tier, division, params, }) => this.request(region, RiotAPITypes.METHOD_KEY.TFT_LEAGUE_V1.GET_ALL_ENTRIES, { tier, division }, {
                id: `${region}.tftLeague.getAllEntries.${tier}.${division}`,
                params,
            }),
            getGrandmaster: ({ region, }) => this.request(region, RiotAPITypes.METHOD_KEY.TFT_LEAGUE_V1.GET_GRANDMASTER, {}, { id: `${region}.tftLeague.getGrandmaster` }),
            getLeagueById: ({ region, leagueId, }) => this.request(region, RiotAPITypes.METHOD_KEY.TFT_LEAGUE_V1.GET_LEAGUE_BY_ID, { leagueId }, { id: `${region}.tftLeague.getLeagueById.${leagueId}` }),
            getMaster: ({ region, }) => this.request(region, RiotAPITypes.METHOD_KEY.TFT_LEAGUE_V1.GET_MASTER, {}, { id: `${region}.tftLeague.getMaster` }),
            getTopRatedLadderByQueue: ({ region, queue, }) => this.request(region, RiotAPITypes.METHOD_KEY.TFT_LEAGUE_V1.GET_TOP_RATED_LADDER_BY_QUEUE, { queue }, { id: `${region}.tftLeague.getTopRatedLadderByQueue.${queue}` }),
        };
    }
    get tftMatch() {
        return {
            getMatchIdsByPUUID: ({ region, puuid, params, }) => this.request(region, RiotAPITypes.METHOD_KEY.TFT_MATCH_V1.GET_MATCH_IDS_BY_PUUID, { puuid }, { id: `${region}.tftMatch.getMatchIdsByPUUID.${puuid}`, params }),
            getById: ({ region, matchId, }) => this.request(region, RiotAPITypes.METHOD_KEY.TFT_MATCH_V1.GET_MATCH_BY_ID, { matchId }, { id: `${region}.tftMatch.getById.${matchId}` }),
        };
    }
    get tftSummoner() {
        return {
            getByAccountId: ({ region, accountId, }) => this.request(region, RiotAPITypes.METHOD_KEY.TFT_SUMMONER_V1.GET_BY_ACCOUNT_ID, { accountId }, { id: `${region}.tftSummoner.getByAccountId.${accountId}` }),
            getByAccessToken: ({ region, accessToken, }) => this.request(region, RiotAPITypes.METHOD_KEY.TFT_SUMMONER_V1.GET_BY_ACCESS_TOKEN, {}, {
                id: `${region}.tftSummoner.getByAccessToken`,
                headers: { Authorization: `Bearer ${accessToken}` },
            }),
            getByPUUID: ({ region, puuid, }) => this.request(region, RiotAPITypes.METHOD_KEY.TFT_SUMMONER_V1.GET_BY_PUUID, { puuid }, { id: `${region}.tftSummoner.getByPUUID.${puuid}` }),
            getBySummonerId: ({ region, summonerId, }) => this.request(region, RiotAPITypes.METHOD_KEY.TFT_SUMMONER_V1.GET_BY_SUMMONER_ID, { summonerId }, { id: `${region}.tftSummoner.getBySummonerId.${summonerId}` }),
        };
    }
    get tournamentStubV5() {
        return {
            createCodes: ({ params, body, }) => this.request(PlatformId.AMERICAS, RiotAPITypes.METHOD_KEY.TOURNAMENT_STUB_V5.POST_CREATE_CODES, {}, {
                id: `${PlatformId.AMERICAS}.tournamentStubV5.createCodes.${params.tournamentId}`,
                params,
                body,
                method: "POST",
            }),
            getByTournamentCode: ({ tournamentCode, }) => this.request(PlatformId.AMERICAS, RiotAPITypes.METHOD_KEY.TOURNAMENT_STUB_V5.GET_TOURNAMENT_BY_CODE, { tournamentCode }, {
                id: `${PlatformId.AMERICAS}.tournamentStubV5.getByTournamentCode.${tournamentCode}`,
                priority: 0,
            }),
            getLobbyEventsByTournamentCode: ({ tournamentCode, }) => this.request(PlatformId.AMERICAS, RiotAPITypes.METHOD_KEY.TOURNAMENT_STUB_V5
                .GET_LOBBY_EVENTS_BY_TOURNAMENT_CODE, { tournamentCode }, {
                id: `${PlatformId.AMERICAS}.tournamentStubV5.getLobbyEventsByTournamentCode.${tournamentCode}`,
            }),
            createProvider: ({ body, }) => this.request(PlatformId.AMERICAS, RiotAPITypes.METHOD_KEY.TOURNAMENT_STUB_V5.POST_CREATE_PROVIDER, {}, {
                id: `${PlatformId.AMERICAS}.tournamentStubV5.createProvider`,
                body,
                method: "POST",
            }),
            createTournament: ({ body, }) => this.request(PlatformId.AMERICAS, RiotAPITypes.METHOD_KEY.TOURNAMENT_STUB_V5.POST_CREATE_TOURNAMENT, {}, {
                id: `${PlatformId.AMERICAS}.tournamentStubV5.createTournament`,
                body,
                method: "POST",
            }),
        };
    }
    get tournamentV5() {
        return {
            createCodes: ({ params, body, }) => this.request(PlatformId.AMERICAS, RiotAPITypes.METHOD_KEY.TOURNAMENT_V5.POST_CREATE_CODES, {}, {
                id: `${PlatformId.AMERICAS}.tournamentV5.createCodes.${params.tournamentId}`,
                priority: 0,
                params,
                body,
                method: "POST",
            }),
            getByTournamentCode: ({ tournamentCode, }) => this.request(PlatformId.AMERICAS, RiotAPITypes.METHOD_KEY.TOURNAMENT_V5.GET_TOURNAMENT_BY_CODE, { tournamentCode }, {
                id: `${PlatformId.AMERICAS}.tournamentV5.getByTournamentCode.${tournamentCode}`,
                priority: 0,
            }),
            updateByTournamentCode: ({ tournamentCode, body, }) => this.request(PlatformId.AMERICAS, RiotAPITypes.METHOD_KEY.TOURNAMENT_V5.GET_TOURNAMENT_BY_CODE, { tournamentCode }, {
                id: `${PlatformId.AMERICAS}.tournamentV5.updateByTournamentCode.${tournamentCode}`,
                priority: 0,
                body,
                method: "POST",
            }),
            getTournamentGameDetailsByTournamentCode: ({ tournamentCode, }) => this.request(PlatformId.AMERICAS, RiotAPITypes.METHOD_KEY.TOURNAMENT_V5.GET_TOURNAMENT_GAME_DETAILS, { tournamentCode }, {
                id: `${PlatformId.AMERICAS}.tournamentV5.getTournamentGameDetailsByTournamentCode.${tournamentCode}`,
                priority: 0,
            }),
            getLobbyEventsByTournamentCode: ({ tournamentCode, }) => this.request(PlatformId.AMERICAS, RiotAPITypes.METHOD_KEY.TOURNAMENT_V5
                .GET_LOBBY_EVENTS_BY_TOURNAMENT_CODE, { tournamentCode }, {
                id: `${PlatformId.AMERICAS}.tournamentV5.getLobbyEventsByTournamentCode.${tournamentCode}`,
                priority: 0,
            }),
            createProvider: ({ body, }) => this.request(PlatformId.AMERICAS, RiotAPITypes.METHOD_KEY.TOURNAMENT_V5.POST_CREATE_PROVIDER, {}, {
                id: `${PlatformId.AMERICAS}.tournamentV5.createProvider`,
                priority: 0,
                body,
                method: "POST",
            }),
            createTournament: ({ body, }) => this.request(PlatformId.AMERICAS, RiotAPITypes.METHOD_KEY.TOURNAMENT_V5.POST_CREATE_TOURNAMENT, {}, {
                id: `${PlatformId.AMERICAS}.tournamentV5.createTournament`,
                priority: 0,
                body,
                method: "POST",
            }),
        };
    }
    get valContent() {
        return {
            getContent: ({ region, params, }) => this.request(region, RiotAPITypes.METHOD_KEY.VAL_CONTENT_V1.GET_CONTENT, {}, { id: `${region}.valContent.getContent`, params }),
        };
    }
    get valMatch() {
        return {
            getById: ({ region, matchId, }) => this.request(region, RiotAPITypes.METHOD_KEY.VAL_MATCH_V1.GET_MATCH_BY_ID, { matchId }, { id: `${region}.valMatch.getById.${matchId}` }),
            getMatchlistByPUUID: ({ region, puuid, }) => this.request(region, RiotAPITypes.METHOD_KEY.VAL_MATCH_V1.GET_MATCHLIST_BY_PUUID, { puuid }, { id: `${region}.valMatch.getMatchlistByPUUID.${puuid}` }),
            getRecentMatchesByQueue: ({ region, queue, }) => this.request(region, RiotAPITypes.METHOD_KEY.VAL_MATCH_V1.GET_RECENT_MATCHES_BY_QUEUE, { queue }, { id: `${region}.valMatch.getRecentMatchesByQueue.${queue}` }),
        };
    }
    get valRanked() {
        return {
            getLeaderboardByQueue: ({ region, queue, params, }) => this.request(region, RiotAPITypes.METHOD_KEY.VAL_RANKED_V1.GET_LEADERBOARD_BY_QUEUE, { actId: queue }, { id: `${region}.valRanked.getLeaderboardByQueue.${queue}`, params }),
        };
    }
}
