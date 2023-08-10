import { QueueService } from './queue.service';
import { MjDrawDto } from './dto/mjDraw.dto';
import { Request } from 'express';
export declare class QueueController {
    private readonly queueService;
    constructor(queueService: QueueService);
    mjDraw(body: MjDrawDto, req: Request): Promise<boolean>;
    getQueue(): Promise<{
        jobIds: any[];
    }>;
}
