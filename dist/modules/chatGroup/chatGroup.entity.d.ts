import { BaseEntity } from 'src/common/entity/baseEntity';
export declare class ChatGroupEntity extends BaseEntity {
    userId: number;
    isSticky: boolean;
    title: string;
    appId: number;
    isDelete: boolean;
}
