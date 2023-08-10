import { GlobalConfigService } from './../globalConfig/globalConfig.service';
import { AuthService } from './../auth/auth.service';
import { UserService } from './../user/user.service';
import { AutoreplyService } from './../autoreply/autoreply.service';
import { GetQrSceneStrDto } from './dto/getQrSceneStr.dto';
export declare class OfficialService {
    private readonly autoreplyService;
    private readonly userService;
    private readonly authService;
    private readonly globalConfigService;
    constructor(autoreplyService: AutoreplyService, userService: UserService, authService: AuthService, globalConfigService: GlobalConfigService);
    private sceneStrMap;
    private scanedSceneStrMap;
    onModuleInit(): Promise<void>;
    getQRSceneStr(body: GetQrSceneStrDto): Promise<string>;
    getQRSceneStrByBind(req: any): Promise<string>;
    getQRCodeTicket(sceneStr: string): Promise<any>;
    getRedirectUrl(url: string): Promise<string>;
    getJsapiTicket(url: string): Promise<{
        appId: any;
        nonceStr: string;
        timestamp: string;
        signature: string;
    }>;
    fetchQRCodeTicket(sceneStr: string): Promise<any>;
    loginByCode(req: any, code: string): Promise<string>;
    scan(openID: string, sceneStr: string): Promise<void>;
    loginBySceneStr(req: any, sceneStr: string): Promise<string>;
    scanBindWx(openId: string, sceneStr: any): Promise<void>;
    bindWxBySceneStr(req: any, sceneStr: string): Promise<any>;
    verify(signature: string, nonce: string, timestamp: string): Promise<boolean>;
    sha1(data: string): string;
    genXmlMsgByConfig(xmlData: any, msgKey: any): Promise<string>;
    genXmlMsg(xmlData: any, msg: any): Promise<string>;
    aotoPlay(msg: any): Promise<any>;
}
