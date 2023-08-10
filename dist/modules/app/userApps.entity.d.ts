import { BaseEntity } from 'src/common/entity/baseEntity';
export declare class UserAppsEntity extends BaseEntity {
    userId: number;
    appId: number;
    catId: number;
    appType: string;
    public: boolean;
    status: number;
    order: number;
}
