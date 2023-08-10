import { OnModuleInit } from '@nestjs/common';
import { RedisClientType } from 'redis';
export declare class RedisCacheService implements OnModuleInit {
    private redisClient;
    constructor(redisClient: RedisClientType);
    onModuleInit(): Promise<void>;
    test(): number;
    get(body: any): Promise<string>;
    set(body: any, time?: number): Promise<void>;
    ttl(key: any): Promise<number>;
    del(body: any): Promise<void>;
    saveToken(userId: any, token: any): Promise<void>;
    invalidateTokens(userId: any, tokens: any): Promise<void>;
    checkTokenAuth(token: any, userId: any, role: any): Promise<boolean>;
}
