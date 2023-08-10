import { RedisCacheService } from '@/modules/redisCache/redisCache.service';
import { ModuleRef } from '@nestjs/core';
import { GlobalConfigService } from '@/modules/globalConfig/globalConfig.service';
declare const JwtAuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class JwtAuthGuard extends JwtAuthGuard_base {
    private redisCacheService;
    private readonly moduleRef;
    private readonly globalConfigService;
    constructor(redisCacheService: RedisCacheService, moduleRef: ModuleRef, globalConfigService: GlobalConfigService);
    canActivate(context: any): Promise<boolean>;
    private extractToken;
    private validateToken;
    handleRequest(err: any, user: any, info: any): any;
}
export {};
