import { GlobalConfigService } from './../globalConfig/globalConfig.service';
import { UserStatusEnum } from './../../common/constants/user.constant';
import { MailerService } from '@nestjs-modules/mailer';
import { VerificationService } from './../verification/verification.service';
import { Repository, Connection, UpdateResult } from 'typeorm';
import { UserRegisterDto } from '../auth/dto/authRegister.dto';
import { UserEntity } from './user.entity';
import { UserBalanceService } from '../userBalance/userBalance.service';
import { UpdateUserDto } from './dto/updateUser.dto';
import { Request } from 'express';
import { UserRechargeDto } from './dto/userRecharge.dto';
import { QueryAllUserDto } from './dto/queryAllUser.dto';
import { UpdateUserStatusDto } from './dto/updateUserStatus.dto';
import { ResetUserPassDto } from './dto/resetUserPass.dto';
import { ConfigEntity } from '../globalConfig/config.entity';
import { WhiteListEntity } from '../chatgpt/whiteList.entity';
import { UserRegisterByPhoneDto } from '../auth/dto/userRegisterByPhone.dto';
export declare class UserService {
    private readonly userEntity;
    private readonly whiteListEntity;
    private readonly connection;
    private readonly verificationService;
    private readonly mailerService;
    private readonly userBalanceService;
    private readonly globalConfigService;
    private readonly configEntity;
    constructor(userEntity: Repository<UserEntity>, whiteListEntity: Repository<WhiteListEntity>, connection: Connection, verificationService: VerificationService, mailerService: MailerService, userBalanceService: UserBalanceService, globalConfigService: GlobalConfigService, configEntity: Repository<ConfigEntity>);
    createUserAndVerifycation(user: UserEntity | UserRegisterDto, req: Request): Promise<UserEntity>;
    verifyUserCredentials(user: any): Promise<UserEntity>;
    verifyUserPassword(userId: any, password: any): Promise<any>;
    updateUserStatus(id: number, status: UserStatusEnum): Promise<boolean>;
    getUserStatus(id: number): Promise<number>;
    queryUserInfoById(id: number): Promise<UserEntity>;
    queryOneUserInfo(userId: number): Promise<UserEntity>;
    checkUserStatus(userId: number): Promise<void>;
    getUserInfo(userId: number): Promise<{
        userInfo: any;
        userBalance: any;
    }>;
    getUserById(id: number): Promise<UserEntity>;
    getUserOpenId(openId: string): Promise<UserEntity>;
    updateInfo(body: UpdateUserDto, req: Request): Promise<string>;
    updateUserPassword(userId: number, password: string): Promise<void>;
    genInviteCode(req: Request): Promise<string>;
    getInviteRecord(req: any, query: any): Promise<any[] | {
        rows: UserEntity[];
        count: number;
    }>;
    inviteLink(code: any): Promise<0 | 1>;
    qureyUserInfoByInviteCode(inviteCode: string): Promise<UserEntity>;
    userRecharge(body: UserRechargeDto): Promise<{
        userId: number;
        rechargeType: number;
        model3Count: number;
        model4Count: number;
        drawMjCount: number;
        days: number;
        extent: string;
        uid: string;
        pkgName: string;
    } & import("../userBalance/accountLog.entity").AccountLogEntity>;
    queryAll(query: QueryAllUserDto, req: Request): Promise<{
        rows: UserEntity[];
        count: number;
    }>;
    queryOne({ id }: {
        id: any;
    }): Promise<UserEntity>;
    updateStatus(body: UpdateUserStatusDto): Promise<string>;
    resetUserPass(body: ResetUserPassDto): Promise<string>;
    savaLoginIp(userId: number, ip: string): Promise<UpdateResult>;
    getUserFromOpenId(openId: string, sceneStr?: string): Promise<UserEntity | ({
        avatar: any;
        username: string;
        status: UserStatusEnum;
        sex: number;
        email: string;
        invitedBy: string;
        openId: string;
    } & UserEntity)>;
    createUserFromOpenId(openId: string, invitedBy: string): Promise<{
        avatar: any;
        username: string;
        status: UserStatusEnum;
        sex: number;
        email: string;
        invitedBy: string;
        openId: string;
    } & UserEntity>;
    bindWx(openId: any, userId: any): Promise<{
        status: boolean;
        msg: string;
    }>;
    getOpenIdByUserId(userId: number): Promise<string>;
    verifyUserRegisterByPhone(params: UserRegisterByPhoneDto): Promise<void>;
    createUser(userInfo: any): Promise<any>;
}
