import { BaseEntity } from 'src/common/entity/baseEntity';
export declare class SalesOrderEntity extends BaseEntity {
    userId: number;
    withdrawalAmount: number;
    orderStatus: number;
    auditStatus: number;
    auditUserId: number;
    paymentStatus: number;
    withdrawalChannels: number;
    contactInformation: string;
    remark: string;
}
