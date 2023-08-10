import { Job } from 'bull';
import { MidjourneyService } from '../midjourney/midjourney.service';
export declare class QueueProcessor {
    private readonly midjourneyService;
    constructor(midjourneyService: MidjourneyService);
    private readonly logger;
    handleJob(job: Job): Promise<boolean>;
    onQueueActive(job: Job): void;
    onQueueError(error: Error): void;
    onQueueProgress(job: Job, progress: number): void;
    onQueueCompleted(job: Job, result: any): void;
    onQueueFailed(job: Job, err: Error): void;
    onQueuePaused(): void;
    onQueueResumed(): void;
    onQueueCleaned(jobs: Job[], type: string): void;
    onQueueDrained(): void;
}
