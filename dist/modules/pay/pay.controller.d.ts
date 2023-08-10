import { PayService } from './pay.service';
export declare class PayController {
    private readonly payService;
    constructor(payService: PayService);
    notifyHupi(body: any): Promise<"failed" | "success">;
    notifyEpay(query: any): Promise<"failed" | "success">;
}
