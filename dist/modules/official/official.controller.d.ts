import { OfficialService } from './official.service';
import { Request } from 'express';
import { GetQrCodeDto } from './dto/getQrCode.dto';
import { GetQrSceneStrDto } from './dto/getQrSceneStr.dto';
export declare class OfficialController {
    private readonly officialService;
    constructor(officialService: OfficialService);
    notify(req: any, query: any, body: any): Promise<any>;
    notifyPost(req: any, query: any, xmlData: any, res: any): Promise<any>;
    getQRSceneStr(body: GetQrSceneStrDto): Promise<string>;
    getQRSceneStrByBind(req: Request): Promise<string>;
    getQRCode(query: GetQrCodeDto): Promise<string>;
    loginBySceneStr(req: Request, body: GetQrCodeDto): Promise<string>;
    bindWxBySceneStr(req: Request, body: GetQrCodeDto): Promise<any>;
    getRedirectUrl(body: {
        url: string;
    }): Promise<string>;
    getJsapiTicket(body: {
        url: string;
    }): Promise<{
        appId: any;
        nonceStr: string;
        timestamp: string;
        signature: string;
    }>;
    loginByCode(req: Request, body: {
        code: string;
    }): Promise<string>;
}
