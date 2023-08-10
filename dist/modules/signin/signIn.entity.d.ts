import { BaseEntity } from 'src/common/entity/baseEntity';
export declare class SigninEntity extends BaseEntity {
    userId: number;
    signInDate: string;
    signInTime: Date;
    isSigned: boolean;
}
