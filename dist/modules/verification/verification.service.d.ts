import { GlobalConfigService } from '@/modules/globalConfig/globalConfig.service';
import { VerifyCodeDto } from './dto/verifyCode.dto';
import { Repository } from 'typeorm';
import { VerifycationEntity } from './verifycation.entity';
import { UserEntity } from './../user/user.entity';
import { VerificationEnum } from './../../common/constants/verification.constant';
import { RedisCacheService } from '../redisCache/redisCache.service';
export declare class VerificationService {
    private readonly verifycationEntity;
    private readonly globalConfigService;
    private readonly redisCacheService;
    constructor(verifycationEntity: Repository<VerifycationEntity>, globalConfigService: GlobalConfigService, redisCacheService: RedisCacheService);
    createVerification(user: UserEntity, type: VerificationEnum, expir?: number): Promise<VerifycationEntity>;
    verifyCode({ code, id }: VerifyCodeDto, type: VerificationEnum): Promise<VerifycationEntity>;
    verifyCaptcha(body: any): Promise<void>;
    sendPhoneCode(messageInfo: any): Promise<boolean>;
}
