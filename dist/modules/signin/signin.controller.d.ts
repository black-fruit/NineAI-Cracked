import { SigninService } from './signin.service';
import { Request } from 'express';
export declare class SigninController {
    private readonly signinService;
    constructor(signinService: SigninService);
    sign(req: Request): Promise<string>;
    getSigninLog(req: Request): Promise<any[]>;
}
