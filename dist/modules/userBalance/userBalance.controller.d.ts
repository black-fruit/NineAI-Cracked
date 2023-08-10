import { Request } from 'express';
import { UserBalanceService } from './userBalance.service';
export declare class UserBalanceController {
    private userBalanceService;
    constructor(userBalanceService: UserBalanceService);
    getRechargeLog(req: Request, params: any): Promise<{
        rows: any[];
        count: number;
    }>;
    getAccountLog(req: Request, params: any): Promise<{
        rows: import("./accountLog.entity").AccountLogEntity[];
        count: number;
    }>;
    getBalance(req: Request): Promise<any>;
    upgradeBalance(): Promise<void>;
}
