import { BaseEntity } from 'src/common/entity/baseEntity';
export declare class UserBalanceEntity extends BaseEntity {
    userId: number;
    model3Count: number;
    model4Count: number;
    drawMjCount: number;
    packageId: number;
    memberModel3Count: number;
    memberModel4Count: number;
    memberDrawMjCount: number;
    useModel3Count: number;
    useModel4Count: number;
    useModel3Token: number;
    useModel4Token: number;
    useDrawMjToken: number;
    extent: string;
    expirationTime: Date;
}
