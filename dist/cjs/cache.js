"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryCache = exports.RedisCache = void 0;
const ioredis_1 = require("ioredis");
class RedisCache {
    constructor(redisClientOpts) {
        this.keyPrefix = "fm-riot-api-";
        this.client = new ioredis_1.Redis(redisClientOpts);
    }
    async get(key) {
        const payload = await this.client.get(this.keyPrefix + key);
        return payload ? JSON.parse(payload) : null;
    }
    async set(key, value, ttl) {
        return await this.client.setex(this.keyPrefix + key, ttl / 1000, JSON.stringify(value));
    }
    async flush() {
        return this.client.flushdb();
    }
}
exports.RedisCache = RedisCache;
class MemoryCache {
    constructor() {
        this.cache = {};
    }
    async get(key) {
        if (!this.cache[key])
            return null;
        if (Date.now() > this.cache[key].expires) {
            delete this.cache[key];
            return null;
        }
        return this.cache[key].value;
    }
    async set(key, value, ttl) {
        this.cache[key] = {
            expires: ttl ? Date.now() + ttl : 0,
            value,
        };
        return "OK";
    }
    async flush() {
        this.cache = {};
        return "OK";
    }
}
exports.MemoryCache = MemoryCache;
