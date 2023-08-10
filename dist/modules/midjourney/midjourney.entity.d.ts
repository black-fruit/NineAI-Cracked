import { BaseEntity } from 'src/common/entity/baseEntity';
export declare class MidjourneyEntity extends BaseEntity {
    userId: number;
    jobId: number;
    extraParam: string;
    prompt: string;
    imgUrl: string;
    fullPrompt: string;
    randomDrawId: string;
    progress: number;
    durationSpent: number;
    status: number;
    action: number;
    orderId: number;
    rec: number;
    message_id: string;
    custom_id: string;
    fileInfo: string;
    extend: string;
    isDelete: number;
}
