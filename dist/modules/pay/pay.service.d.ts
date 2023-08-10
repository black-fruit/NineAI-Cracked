import { Repository } from 'typeorm';
import { OrderEntity } from '../order/order.entity';
import { CramiPackageEntity } from '../crami/cramiPackage.entity';
import { UserBalanceService } from '../userBalance/userBalance.service';
import { GlobalConfigService } from '../globalConfig/globalConfig.service';
import { UserService } from '../user/user.service';
export declare class PayService {
    private readonly cramiPackageEntity;
    private readonly orderEntity;
    private readonly userBalanceService;
    private readonly globalConfigService;
    private readonly userService;
    constructor(cramiPackageEntity: Repository<CramiPackageEntity>, orderEntity: Repository<OrderEntity>, userBalanceService: UserBalanceService, globalConfigService: GlobalConfigService, userService: UserService);
    private WxPay;
    onModuleInit(): Promise<void>;
    notify(params: object): Promise<"failed" | "success">;
    pay(userId: number, orderId: string, payType?: string): Promise<any>;
    query(orderId: string): Promise<OrderEntity>;
    notifyHupi(params: object): Promise<"failed" | "success">;
    payHupi(userId: number, orderId: string, payType?: string): Promise<{
        url_qrcode: any;
        url: any;
    }>;
    queryHupi(orderId: string): Promise<any>;
    notifyEpay(params: object): Promise<"failed" | "success">;
    payEpay(userId: number, orderId: string, payType?: string): Promise<{
        url_qrcode: any;
        redirectUrl: string;
        channel: string;
        isRedirect: boolean;
    } | {
        url_qrcode: any;
        redirectUrl: any;
        channel: string;
        isRedirect: boolean;
    }>;
    queryEpay(orderId: string): Promise<any>;
    notifyMpay(params: object): Promise<"failed" | "success">;
    payMpay(userId: number, orderId: string, payType?: string): Promise<{
        url_qrcode: any;
        redirectUrl: string;
        channel: string;
        isRedirect: boolean;
    }>;
    queryMpay(orderId: string): Promise<any>;
    notifyWeChat(params: object): Promise<"failed" | "success">;
    payWeChat(userId: number, orderId: string, payType?: string): Promise<any>;
    queryWeChat(orderId: string): Promise<any>;
    sign(params: object, secret: string): string;
}
