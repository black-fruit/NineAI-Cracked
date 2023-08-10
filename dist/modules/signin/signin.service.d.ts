import { GlobalConfigService } from './../globalConfig/globalConfig.service';
import { UserBalanceService } from './../userBalance/userBalance.service';
import { Request } from 'express';
import { SigninEntity } from './signIn.entity';
import { Repository } from 'typeorm';
import { UserEntity } from '../user/user.entity';
export declare class SigninService {
    private readonly signinEntity;
    private readonly userEntity;
    private readonly userBalanceService;
    private readonly globalConfigService;
    constructor(signinEntity: Repository<SigninEntity>, userEntity: Repository<UserEntity>, userBalanceService: UserBalanceService, globalConfigService: GlobalConfigService);
    sign(req: Request): Promise<string>;
    getSigninLog(req: Request): Promise<any[]>;
}
