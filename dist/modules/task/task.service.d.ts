import { GlobalConfigService } from './../globalConfig/globalConfig.service';
import { UserBalanceEntity } from '../userBalance/userBalance.entity';
import { Repository } from 'typeorm';
export declare class TaskService {
    private readonly userBalanceEntity;
    private readonly globalConfigService;
    constructor(userBalanceEntity: Repository<UserBalanceEntity>, globalConfigService: GlobalConfigService);
    handleCron(): void;
    checkauth(): void;
    checkUserMemerExpire(): Promise<void>;
}
