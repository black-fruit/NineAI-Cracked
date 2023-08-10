import { BaseEntity } from 'src/common/entity/baseEntity';
export declare class OrderEntity extends BaseEntity {
    orderId: string;
    tradeId: string;
    payPlatform: string;
    userId: number;
    goodsId: number;
    count: number;
    price: number;
    total: number;
    status: number;
    paydAt: Date;
    channel: string;
}
