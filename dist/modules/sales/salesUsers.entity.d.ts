import { BaseEntity } from 'src/common/entity/baseEntity';
export declare class SalesUsersEntity extends BaseEntity {
    userId: number;
    performanceRatio: number;
    salesOutletName: string;
    totalAmount: number;
    withdrawalAmount: number;
    distributionBalance: number;
    drawMoneyIn: number;
    orderCount: number;
}
