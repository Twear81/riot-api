import { METHODS, PlatformId, RiotRateLimiter } from "@ballaual/riot-rate-limiter";
import { Leaves, RiotAPITypes } from "./@types";
import { MemoryCache, RedisCache } from "./cache";
import { DDragon } from "./ddragon";
import { regionToCluster } from "./utils";
export { DDragon, PlatformId, RiotAPITypes, regionToCluster };
export declare class RiotAPI {
    readonly cache?: MemoryCache | RedisCache;
    readonly riotRateLimiter: RiotRateLimiter;
    readonly token: string;
    readonly config: RiotAPITypes.Config;
    ddragon: DDragon;
    constructor(token: string, config?: RiotAPITypes.Config);
    private getHeaders;
    private getOptions;
    private getJobOptions;
    private checkCache;
    private setCache;
    request<T>(platformId: PlatformId, methodKey: Leaves<METHODS>, pathData: {
        [key: string]: string | number;
    }, options?: RiotAPITypes.RequestOptions): Promise<T>;
    get account(): {
        getByPUUID: ({ region, puuid, }: {
            region: Exclude<RiotAPITypes.Cluster, PlatformId.SEA>;
            puuid: string;
        }) => Promise<RiotAPITypes.Account.AccountDTO>;
        getByRiotId: ({ region, gameName, tagLine, }: {
            region: Exclude<RiotAPITypes.Cluster, PlatformId.SEA>;
            gameName: string;
            tagLine: string;
        }) => Promise<RiotAPITypes.Account.AccountDTO>;
        getByAccessToken: ({ region, accessToken, }: {
            region: Exclude<RiotAPITypes.Cluster, PlatformId.SEA>;
            accessToken: string;
        }) => Promise<RiotAPITypes.Account.AccountDTO>;
        getActiveShardForPlayer: ({ region, game, puuid, }: {
            region: Exclude<RiotAPITypes.Cluster, PlatformId.SEA>;
            game: "val" | "lor";
            puuid: string;
        }) => Promise<RiotAPITypes.Account.ActiveShardDTO>;
    };
    get championMastery(): {
        getAllChampions: ({ region, summonerId, }: {
            region: RiotAPITypes.LoLRegion;
            summonerId: string;
        }) => Promise<RiotAPITypes.ChampionMastery.ChampionMasteryDTO[]>;
        getChampion: ({ region, championId, summonerId, }: {
            region: RiotAPITypes.LoLRegion;
            championId: number;
            summonerId: string;
        }) => Promise<RiotAPITypes.ChampionMastery.ChampionMasteryDTO>;
        getTopChampions: ({ region, summonerId, params, }: {
            region: RiotAPITypes.LoLRegion;
            summonerId: string;
            params?: {
                count?: number;
            };
        }) => Promise<RiotAPITypes.ChampionMastery.ChampionMasteryDTO[]>;
        getMasteryScore: ({ region, summonerId, }: {
            region: RiotAPITypes.LoLRegion;
            summonerId: string;
        }) => Promise<number>;
    };
    get champion(): {
        getRotations: ({ region, }: {
            region: RiotAPITypes.LoLRegion;
        }) => Promise<RiotAPITypes.Champion.ChampionInfoDTO>;
    };
    get clash(): {
        getPlayersByPUUID: ({ region, puuid, }: {
            region: RiotAPITypes.LoLRegion;
            puuid: string;
        }) => Promise<RiotAPITypes.Clash.PlayerDTO[]>;
        getTeamById: ({ region, teamId, }: {
            region: RiotAPITypes.LoLRegion;
            teamId: string;
        }) => Promise<RiotAPITypes.Clash.TeamDTO>;
        getTournaments: ({ region, }: {
            region: RiotAPITypes.LoLRegion;
        }) => Promise<RiotAPITypes.Clash.TournamentDTO[]>;
        getTournamentById: ({ region, tournamentId, }: {
            region: RiotAPITypes.LoLRegion;
            tournamentId: string;
        }) => Promise<RiotAPITypes.Clash.TournamentDTO>;
        getTournamentByTeamId: ({ region, teamId, }: {
            region: RiotAPITypes.LoLRegion;
            teamId: string;
        }) => Promise<RiotAPITypes.Clash.TeamDTO>;
    };
    get leagueExp(): {
        getLeagueEntries: ({ region, queue, tier, division, }: {
            region: RiotAPITypes.LoLRegion;
            queue: RiotAPITypes.QUEUE;
            tier: RiotAPITypes.TIER;
            division: RiotAPITypes.DIVISION;
        }) => Promise<RiotAPITypes.League.LeagueEntryDTO[]>;
    };
    get league(): {
        getChallengerByQueue: ({ region, queue, }: {
            region: RiotAPITypes.LoLRegion;
            queue: RiotAPITypes.QUEUE;
        }) => Promise<RiotAPITypes.League.LeagueListDTO>;
        getEntriesByPUUID: ({ region, encryptedPUUID, }: {
            region: RiotAPITypes.LoLRegion;
            encryptedPUUID: string;
        }) => Promise<RiotAPITypes.League.LeagueEntryDTO[]>;
        getAllEntries: ({ region, queue, tier, division, }: {
            region: RiotAPITypes.LoLRegion;
            queue: RiotAPITypes.QUEUE;
            tier: RiotAPITypes.TIER;
            division: RiotAPITypes.DIVISION;
        }) => Promise<RiotAPITypes.League.LeagueEntryDTO[]>;
        getGrandmasterByQueue: ({ region, queue, }: {
            region: RiotAPITypes.LoLRegion;
            queue: RiotAPITypes.QUEUE;
        }) => Promise<RiotAPITypes.League.LeagueListDTO>;
        getById: ({ region, leagueId, }: {
            region: RiotAPITypes.LoLRegion;
            leagueId: string;
        }) => Promise<RiotAPITypes.League.LeagueListDTO>;
        getMasterByQueue: ({ region, queue, }: {
            region: RiotAPITypes.LoLRegion;
            queue: RiotAPITypes.QUEUE;
        }) => Promise<RiotAPITypes.League.LeagueListDTO>;
    };
    get lolChallenges(): {
        getConfig: ({ region, }: {
            region: RiotAPITypes.LoLRegion;
        }) => Promise<RiotAPITypes.LolChallenges.ChallengeConfigInfoDTO[]>;
        getPercentiles: ({ region, }: {
            region: RiotAPITypes.LoLRegion;
        }) => Promise<RiotAPITypes.LolChallenges.ChallengePercentilesMap>;
        getConfigById: ({ region, challengeId, }: {
            region: RiotAPITypes.LoLRegion;
            challengeId: number;
        }) => Promise<RiotAPITypes.LolChallenges.ChallengeConfigInfoDTO>;
        getLeaderboardById: ({ region, challengeId, params, }: {
            region: RiotAPITypes.LoLRegion;
            challengeId: number;
            params?: {
                level?: number;
            };
        }) => Promise<RiotAPITypes.LolChallenges.ApexPlayerInfoDTO>;
        getPercentilesById: ({ region, challengeId, }: {
            region: RiotAPITypes.LoLRegion;
            challengeId: number;
        }) => Promise<RiotAPITypes.LolChallenges.ChallengePercentiles>;
        getPlayerDataByPUUID: ({ region, puuid, }: {
            region: RiotAPITypes.LoLRegion;
            puuid: string;
        }) => Promise<RiotAPITypes.LolChallenges.PlayerInfoDTO>;
    };
    get lorDeck(): {
        getDecksForPlayer: ({ region, accessToken, }: {
            region: Exclude<RiotAPITypes.LORCluster, PlatformId.ASIA | PlatformId.APAC>;
            accessToken: string;
        }) => Promise<RiotAPITypes.LorDeck.DeckDTO[]>;
        createDeck: ({ region, accessToken, body, }: {
            region: Exclude<RiotAPITypes.LORCluster, PlatformId.ASIA>;
            accessToken: string;
            body: RiotAPITypes.LorDeck.NewDeckDTO;
        }) => Promise<string>;
    };
    get lorInventory(): {
        getCardsOwnedByPlayer: ({ region, accessToken, }: {
            region: Exclude<RiotAPITypes.LORCluster, PlatformId.ASIA | PlatformId.APAC>;
            accessToken: string;
        }) => Promise<RiotAPITypes.LorInventory.CardDTO[]>;
    };
    get lorMatch(): {
        getMatchIdsByPUUID: ({ region, puuid, }: {
            region: Exclude<RiotAPITypes.LORCluster, PlatformId.ASIA>;
            puuid: string;
        }) => Promise<string[]>;
        getById: ({ region, matchId, }: {
            region: Exclude<RiotAPITypes.LORCluster, PlatformId.ASIA>;
            matchId: string;
        }) => Promise<RiotAPITypes.LorMatch.MatchDTO>;
    };
    get lorRanked(): {
        getMasterTier: ({ region, }: {
            region: Exclude<RiotAPITypes.LORCluster, PlatformId.ASIA | PlatformId.APAC>;
        }) => Promise<RiotAPITypes.LorRanked.LeaderboardDTO>;
    };
    get matchV5(): {
        getIdsByPuuid: ({ cluster, puuid, params, }: {
            cluster: Exclude<RiotAPITypes.Cluster, PlatformId.ESPORTS>;
            puuid: string;
            params?: {
                queue?: number;
                type?: RiotAPITypes.MatchV5.MatchType;
                start?: number;
                count?: number;
                startTime?: number;
                endTime?: number;
            };
        }) => Promise<string[]>;
        getMatchById: ({ cluster, matchId, }: {
            cluster: Exclude<RiotAPITypes.Cluster, PlatformId.ESPORTS>;
            matchId: string;
        }) => Promise<RiotAPITypes.MatchV5.MatchDTO>;
        getMatchTimelineById: ({ cluster, matchId, }: {
            cluster: Exclude<RiotAPITypes.Cluster, PlatformId.ESPORTS>;
            matchId: string;
        }) => Promise<RiotAPITypes.MatchV5.MatchTimelineDTO>;
    };
    get spectatorTftV5(): {
        getByPuuid: ({ region, puuid, }: {
            region: RiotAPITypes.LoLRegion;
            puuid: string;
        }) => Promise<RiotAPITypes.SpectatorTftV5.CurrentGameInfoDTO>;
        getFeaturedGames: ({ region, }: {
            region: RiotAPITypes.LoLRegion;
        }) => Promise<RiotAPITypes.SpectatorTftV5.FeaturedGamesDTO>;
    };
    get spectator(): {
        getBySummonerId: ({ region, summonerId, }: {
            region: RiotAPITypes.LoLRegion;
            summonerId: string;
        }) => Promise<RiotAPITypes.Spectator.CurrentGameInfoDTO>;
        getFeaturedGames: ({ region, }: {
            region: RiotAPITypes.LoLRegion;
        }) => Promise<RiotAPITypes.Spectator.FeaturedGamesDTO>;
    };
    get summoner(): {
        getByRsoPUUID: ({ region, rsoPuuid, }: {
            region: RiotAPITypes.LoLRegion;
            rsoPuuid: string;
        }) => Promise<RiotAPITypes.Summoner.SummonerDTO>;
        getByAccountId: ({ region, accountId, }: {
            region: RiotAPITypes.LoLRegion;
            accountId: string;
        }) => Promise<RiotAPITypes.Summoner.SummonerDTO>;
        getByPUUID: ({ region, puuid, }: {
            region: RiotAPITypes.LoLRegion;
            puuid: string;
        }) => Promise<RiotAPITypes.Summoner.SummonerDTO>;
        getBySummonerId: ({ region, summonerId, }: {
            region: RiotAPITypes.LoLRegion;
            summonerId: string;
        }) => Promise<RiotAPITypes.Summoner.SummonerDTO>;
        getByAccessToken: ({ region, accessToken, }: {
            region: RiotAPITypes.LoLRegion;
            accessToken: string;
        }) => Promise<RiotAPITypes.Summoner.SummonerDTO>;
    };
    get tftLeague(): {
        getChallenger: ({ region, }: {
            region: RiotAPITypes.LoLRegion;
        }) => Promise<RiotAPITypes.TftLeague.LeagueListDTO>;
        getEntriesByPUUID: ({ region, puuid, }: {
            region: RiotAPITypes.LoLRegion;
            puuid: string;
        }) => Promise<RiotAPITypes.TftLeague.LeagueEntryDTO[]>;
        getAllEntries: ({ region, tier, division, params, }: {
            region: RiotAPITypes.LoLRegion;
            tier: RiotAPITypes.TFT_TIER;
            division: RiotAPITypes.DIVISION;
            params?: {
                page?: number;
            };
        }) => Promise<RiotAPITypes.TftLeague.LeagueEntryDTO[]>;
        getGrandmaster: ({ region, }: {
            region: RiotAPITypes.LoLRegion;
        }) => Promise<RiotAPITypes.TftLeague.LeagueListDTO>;
        getLeagueById: ({ region, leagueId, }: {
            region: RiotAPITypes.LoLRegion;
            leagueId: string;
        }) => Promise<RiotAPITypes.TftLeague.LeagueListDTO>;
        getMaster: ({ region, }: {
            region: RiotAPITypes.LoLRegion;
        }) => Promise<RiotAPITypes.TftLeague.LeagueListDTO>;
        getTopRatedLadderByQueue: ({ region, queue, }: {
            region: RiotAPITypes.LoLRegion;
            queue: string;
        }) => Promise<RiotAPITypes.TftLeague.TopRatedLadderEntryDTO>;
    };
    get tftMatch(): {
        getMatchIdsByPUUID: ({ region, puuid, params, }: {
            region: RiotAPITypes.TFTCluster;
            puuid: string;
            params?: {
                start?: number;
                endTime?: number;
                startTime?: number;
                count?: number;
            };
        }) => Promise<string[]>;
        getById: ({ region, matchId, }: {
            region: RiotAPITypes.TFTCluster;
            matchId: string;
        }) => Promise<RiotAPITypes.TftMatch.MatchDTO>;
    };
    get tftSummoner(): {
        getByAccountId: ({ region, accountId, }: {
            region: RiotAPITypes.LoLRegion;
            accountId: string;
        }) => Promise<RiotAPITypes.Summoner.SummonerDTO>;
        getByAccessToken: ({ region, accessToken, }: {
            region: RiotAPITypes.LoLRegion;
            accessToken: string;
        }) => Promise<RiotAPITypes.Summoner.SummonerDTO>;
        getByPUUID: ({ region, puuid, }: {
            region: RiotAPITypes.LoLRegion;
            puuid: string;
        }) => Promise<RiotAPITypes.Summoner.SummonerDTO>;
        getBySummonerId: ({ region, summonerId, }: {
            region: RiotAPITypes.LoLRegion;
            summonerId: string;
        }) => Promise<RiotAPITypes.Summoner.SummonerDTO>;
    };
    get tournamentStubV5(): {
        createCodes: ({ params, body, }: {
            params: {
                count: number;
                tournamentId: number;
            };
            body: RiotAPITypes.TournamentV5.TournamentCodeParametersV5DTO;
        }) => Promise<string[]>;
        getByTournamentCode: ({ tournamentCode, }: {
            tournamentCode: string;
        }) => Promise<RiotAPITypes.TournamentV5.TournamentCodeV5DTO>;
        getLobbyEventsByTournamentCode: ({ tournamentCode, }: {
            tournamentCode: string;
        }) => Promise<RiotAPITypes.TournamentV5.LobbyEventV5DTOWrapper>;
        createProvider: ({ body, }: {
            body: RiotAPITypes.TournamentV5.ProviderRegistrationParametersV5DTO;
        }) => Promise<number>;
        createTournament: ({ body, }: {
            body: RiotAPITypes.TournamentV5.TournamentRegistrationParametersV5DTO;
        }) => Promise<number>;
    };
    get tournamentV5(): {
        createCodes: ({ params, body, }: {
            params: {
                count: number;
                tournamentId: number;
            };
            body: RiotAPITypes.TournamentV5.TournamentCodeParametersV5DTO;
        }) => Promise<string[]>;
        getByTournamentCode: ({ tournamentCode, }: {
            tournamentCode: string;
        }) => Promise<RiotAPITypes.TournamentV5.TournamentCodeV5DTO>;
        updateByTournamentCode: ({ tournamentCode, body, }: {
            tournamentCode: string;
            body: RiotAPITypes.TournamentV5.TournamentCodeUpdateParametersV5DTO;
        }) => Promise<any>;
        getTournamentGameDetailsByTournamentCode: ({ tournamentCode, }: {
            tournamentCode: string;
        }) => Promise<RiotAPITypes.TournamentV5.TournanmentGamesV5DTO[]>;
        getLobbyEventsByTournamentCode: ({ tournamentCode, }: {
            tournamentCode: string;
        }) => Promise<RiotAPITypes.TournamentV5.LobbyEventV5DTOWrapper>;
        createProvider: ({ body, }: {
            body: RiotAPITypes.TournamentV5.ProviderRegistrationParametersV5DTO;
        }) => Promise<number>;
        createTournament: ({ body, }: {
            body: RiotAPITypes.TournamentV5.TournamentRegistrationParametersV5DTO;
        }) => Promise<number>;
    };
    get valContent(): {
        getContent: ({ region, params, }: {
            region: RiotAPITypes.VALCluster;
            params?: {
                locale?: string;
            };
        }) => Promise<RiotAPITypes.ValContent.ContentDTO>;
    };
    get valMatch(): {
        getById: ({ region, matchId, }: {
            region: RiotAPITypes.VALCluster;
            matchId: string;
        }) => Promise<RiotAPITypes.ValMatch.MatchDTO>;
        getMatchlistByPUUID: ({ region, puuid, }: {
            region: RiotAPITypes.VALCluster;
            puuid: string;
        }) => Promise<RiotAPITypes.ValMatch.MatchlistDTO>;
        getRecentMatchesByQueue: ({ region, queue, }: {
            region: RiotAPITypes.VALCluster;
            queue: RiotAPITypes.VAL_QUEUE;
        }) => Promise<RiotAPITypes.ValMatch.RecentMatchesDTO>;
    };
    get valRanked(): {
        getLeaderboardByQueue: ({ region, queue, params, }: {
            region: Exclude<RiotAPITypes.VALCluster, PlatformId.ESPORTS>;
            queue: string;
            params?: {
                size?: number;
                startIndex?: number;
            };
        }) => Promise<RiotAPITypes.ValMatch.RecentMatchesDTO>;
    };
}
