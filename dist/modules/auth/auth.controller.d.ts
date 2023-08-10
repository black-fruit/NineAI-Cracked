import { VerifyCodeDto } from './../verification/dto/verifyCode.dto';
import { UserLoginDto } from './dto/authLogin.dto';
import { AuthService } from './auth.service';
import { UserRegisterDto } from './dto/authRegister.dto';
import { Request, Response } from 'express';
import { UpdatePasswordDto } from './dto/updatePassword.dto';
import { UpdatePassByOtherDto } from './dto/updatePassByOther.dto';
import { SendPhoneCodeDto } from './dto/sendPhoneCode.dto';
import { UserRegisterByPhoneDto } from './dto/userRegisterByPhone.dto';
import { LoginByPhoneDto } from './dto/loginByPhone.dt';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(body: UserRegisterDto, req: Request): Promise<any>;
    registerByPhone(body: UserRegisterByPhoneDto, req: Request): Promise<void>;
    login(body: UserLoginDto, req: Request): Promise<string>;
    loginByPhone(body: LoginByPhoneDto, req: Request): Promise<string>;
    updatePassword(req: Request, body: UpdatePasswordDto): Promise<string>;
    updatePassByOther(req: Request, body: UpdatePassByOtherDto): Promise<string>;
    getInfo(req: Request): Promise<{
        userInfo: any;
        userBalance: any;
    }>;
    activateAccount(parmas: VerifyCodeDto, res: Response): Promise<void>;
    registerSuccess(parmas: any): Promise<{
        username: any;
        id: any;
        email: any;
        teamName: any;
        registerSuccessEmailTitle: any;
        registerSuccessEmailTeamName: any;
        registerSuccessEmaileAppend: any;
    }>;
    registerError(parmas: any): Promise<{
        message: any;
        teamName: any;
        registerFailEmailTitle: any;
        registerFailEmailTeamName: any;
    }>;
    captcha(parmas: any): Promise<{
        svgCode: string;
        code: string;
    }>;
    sendPhoneCode(parmas: SendPhoneCodeDto): Promise<string>;
}
