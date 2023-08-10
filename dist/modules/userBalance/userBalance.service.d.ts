import { GlobalConfigService } from './../globalConfig/globalConfig.service';
import { BalanceEntity } from './balance.entity';
import { Repository } from 'typeorm';
import { AccountLogEntity } from './accountLog.entity';
import { Request } from 'express';
import { ConfigEntity } from '../globalConfig/config.entity';
import { CramiPackageEntity } from '../crami/cramiPackage.entity';
import { UserBalanceEntity } from './userBalance.entity';
import { UserEntity } from '../user/user.entity';
import { SalesUsersEntity } from '../sales/salesUsers.entity';
import { SalesService } from '../sales/sales.service';
import { WhiteListEntity } from '../chatgpt/whiteList.entity';
interface LogInfo {
    userId: number;
    rechargeType: number;
    model3Count?: number;
    model4Count?: number;
    drawMjCount?: number;
    days?: number;
    pkgName?: string;
    extent?: string;
}
interface UserBalanceInfo {
    model3Count?: number;
    model4Count?: number;
    drawMjCount?: number;
}
export declare class UserBalanceService {
    private readonly balanceEntity;
    private readonly userBalanceEntity;
    private readonly accountLogEntity;
    private readonly cramiPackageEntity;
    private readonly configEntity;
    private readonly userEntity;
    private readonly salesUsersEntity;
    private readonly whiteListEntity;
    private readonly salesService;
    private readonly globalConfigService;
    constructor(balanceEntity: Repository<BalanceEntity>, userBalanceEntity: Repository<UserBalanceEntity>, accountLogEntity: Repository<AccountLogEntity>, cramiPackageEntity: Repository<CramiPackageEntity>, configEntity: Repository<ConfigEntity>, userEntity: Repository<UserEntity>, salesUsersEntity: Repository<SalesUsersEntity>, whiteListEntity: Repository<WhiteListEntity>, salesService: SalesService, globalConfigService: GlobalConfigService);
    addBalanceToNewUser(userId: number, invitedId: number): Promise<void>;
    validateBalance(userId: any, type: any, amount: any): Promise<UserBalanceEntity>;
    deductFromBalance(userId: any, deductionType: any, amount: any, UseAmount?: number): Promise<void>;
    queryUserBalance(userId: number): any;
    saveRecordRechargeLog(logInfo: LogInfo): Promise<{
        userId: number;
        rechargeType: number;
        model3Count: number;
        model4Count: number;
        drawMjCount: number;
        days: number;
        extent: string;
        uid: string;
        pkgName: string;
    } & AccountLogEntity>;
    createBaseUserBalance(userId: number, userBalanceInfo?: UserBalanceInfo): Promise<{
        userId: number;
        model3Count: number;
        model4Count: number;
        drawMjCount: number;
    } & UserBalanceEntity>;
    addBalanceToUser(userId: any, balance: any, days?: number): Promise<void>;
    addBalanceToOrder(order: any): Promise<void>;
    getRechargeLog(req: Request, params: any): Promise<{
        rows: any[];
        count: number;
    }>;
    getAccountLog(req: any, params: any): Promise<{
        rows: AccountLogEntity[];
        count: number;
    }>;
    queryUserBalanceByIds(ids: number[]): Promise<UserBalanceEntity[]>;
    refundMjBalance(userId: any, amount: any): Promise<void>;
    upgradeBalance(): Promise<void>;
    writeOldBalanceToNewTable(userId: any, balanceInfo: any): Promise<void>;
}
export {};
