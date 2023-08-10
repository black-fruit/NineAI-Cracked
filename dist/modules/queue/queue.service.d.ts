import { OnApplicationBootstrap } from '@nestjs/common';
import { Queue } from 'bull';
import { MjDrawDto } from './dto/mjDraw.dto';
import { MidjourneyService } from '../midjourney/midjourney.service';
import { Request } from 'express';
import { UserBalanceService } from '../userBalance/userBalance.service';
import { GlobalConfigService } from '../globalConfig/globalConfig.service';
export declare class QueueService implements OnApplicationBootstrap {
    private readonly mjDrawQueue;
    private readonly midjourneyService;
    private readonly userBalanceService;
    private readonly globalConfigService;
    constructor(mjDrawQueue: Queue, midjourneyService: MidjourneyService, userBalanceService: UserBalanceService, globalConfigService: GlobalConfigService);
    private readonly jobIds;
    onApplicationBootstrap(): Promise<void>;
    addMjDrawQueue(body: MjDrawDto, req: Request): Promise<boolean>;
    getQueue(): Promise<{
        jobIds: any[];
    }>;
}
