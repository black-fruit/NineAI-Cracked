import { OnModuleInit } from '@nestjs/common';
import { SetConfigDto } from './dto/setConfig.dto';
import { ConfigEntity } from './config.entity';
import { Repository } from 'typeorm';
import { QueryConfigDto } from './dto/queryConfig.dto';
import { Request } from 'express';
export declare class GlobalConfigService implements OnModuleInit {
    private readonly configEntity;
    constructor(configEntity: Repository<ConfigEntity>);
    private globalConfigs;
    private wechatAccessToken;
    private wechatJsapiTicket;
    private nineAiToken;
    private count;
    onModuleInit(): Promise<void>;
    getConfigs(configKey: string[]): Promise<any>;
    initGetAllConfig(): Promise<void>;
    initBaiduSensitive(isInit?: boolean): Promise<void>;
    getWechatAccessToken(isInit?: boolean): Promise<void>;
    fetchBaseAccessToken(appId: string, secret: string, isInit?: boolean): Promise<any>;
    fetchJsapiTicket(accessToken: string): Promise<any>;
    queryAllConfig(req: Request): Promise<any>;
    queryFrontConfig(query: any): Promise<{
        isUseWxLogin: boolean;
    }>;
    queryGptKeys(req: Request): Promise<ConfigEntity[]>;
    setGptKeys(body: any): Promise<string>;
    queryConfig(body: QueryConfigDto, req: Request): Promise<{}>;
    notice(notice: any): Promise<void>;
    getNineAiToken(): boolean;
    setConfig(body: SetConfigDto): Promise<string>;
    createOrUpdate(setting: any): Promise<void>;
    queryNotice(): Promise<any>;
    queryPayType(): Promise<"wechat" | "epay" | "mpay" | "hupi">;
    getAuthInfo(): Promise<{
        siteName: any;
        qqNumber: any;
        vxNumber: any;
        registerBaseUrl: any;
        domain: any;
    }>;
    getPhoneVerifyConfig(): Promise<{
        accessKeyId: any;
        accessKeySecret: any;
        SignName: any;
        TemplateCode: any;
    }>;
    nineAiCheckAuth(): Promise<void>;
    getNamespace(): string;
    getSignatureGiftConfig(): Promise<{
        model3Count: number;
        model4Count: number;
        drawMjCount: number;
    }>;
}
