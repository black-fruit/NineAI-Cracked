import { BaseEntity } from 'src/common/entity/baseEntity';
export declare class SalesRecordsEntity extends BaseEntity {
    inviterUserId: number;
    inviteeUserId: number;
    orderId: string;
    orderPrice: number;
    commissionAmount: number;
    commissionPercentage: number;
}
