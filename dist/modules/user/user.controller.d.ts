import { UserService } from './user.service';
import { UpdateUserDto } from './dto/updateUser.dto';
import { Request } from 'express';
import { UserRechargeDto } from './dto/userRecharge.dto';
import { QueryAllUserDto } from './dto/queryAllUser.dto';
import { QueryOneUserDto } from './dto/queryOne.dto';
import { UpdateUserStatusDto } from './dto/updateUserStatus.dto';
import { ResetUserPassDto } from './dto/resetUserPass.dto';
import { queryInviteRecordDto } from './dto/queryInviteRecord.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    update(body: UpdateUserDto, req: Request): Promise<string>;
    genInviteCode(req: Request): Promise<string>;
    getInviteRecord(req: Request, query: queryInviteRecordDto): Promise<any[] | {
        rows: import("./user.entity").UserEntity[];
        count: number;
    }>;
    inviteLink(code: string): Promise<0 | 1>;
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
        rows: import("./user.entity").UserEntity[];
        count: number;
    }>;
    queryOne(params: QueryOneUserDto): Promise<import("./user.entity").UserEntity>;
    updateStatus(body: UpdateUserStatusDto): Promise<string>;
    resetUserPass(body: ResetUserPassDto): Promise<string>;
}
