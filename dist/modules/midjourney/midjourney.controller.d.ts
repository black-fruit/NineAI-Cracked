import { MidjourneyService } from './midjourney.service';
import { Request, Response } from 'express';
import { GetListDto } from './dto/getList.dto';
export declare class MidjourneyController {
    private readonly midjourneyService;
    constructor(midjourneyService: MidjourneyService);
    getDrawList(req: Request, params: any): Promise<any>;
    getList(params: GetListDto): Promise<any>;
    getAdminDrawList(req: Request, params: GetListDto): Promise<{
        rows: import("./midjourney.entity").MidjourneyEntity[];
        count: number;
    }>;
    recDraw(params: any): Promise<string>;
    download(url: string, res: Response): Promise<void>;
    deleteDraw(id: number, req: Request): Promise<string>;
    delLog(req: Request, body: any): Promise<string>;
}
