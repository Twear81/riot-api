"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regionToCluster = regionToCluster;
const riot_rate_limiter_1 = require("@ballaual/riot-rate-limiter");
function regionToCluster(region) {
    switch (region) {
        case riot_rate_limiter_1.PlatformId.NA1:
        case riot_rate_limiter_1.PlatformId.BR1:
        case riot_rate_limiter_1.PlatformId.LA1:
        case riot_rate_limiter_1.PlatformId.LA2:
            return riot_rate_limiter_1.PlatformId.AMERICAS;
        case riot_rate_limiter_1.PlatformId.KR:
        case riot_rate_limiter_1.PlatformId.JP1:
            return riot_rate_limiter_1.PlatformId.ASIA;
        case riot_rate_limiter_1.PlatformId.EUW1:
        case riot_rate_limiter_1.PlatformId.EUNE1:
        case riot_rate_limiter_1.PlatformId.TR1:
        case riot_rate_limiter_1.PlatformId.RU:
            return riot_rate_limiter_1.PlatformId.EUROPE;
        case riot_rate_limiter_1.PlatformId.OC1:
        case riot_rate_limiter_1.PlatformId.PH2:
        case riot_rate_limiter_1.PlatformId.SG2:
        case riot_rate_limiter_1.PlatformId.TH2:
        case riot_rate_limiter_1.PlatformId.TW2:
        case riot_rate_limiter_1.PlatformId.VN2:
            return riot_rate_limiter_1.PlatformId.SEA;
        default:
            return riot_rate_limiter_1.PlatformId.AMERICAS;
    }
}
