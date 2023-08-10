import { Request, Response } from 'express';
import { ChatLogService } from './chatLog.service';
import { QuerAllDrawLogDto } from './dto/queryAllDrawLog.dto';
import { QuerAllChatLogDto } from './dto/queryAllChatLog.dto';
import { recDrawImgDto } from './dto/recDrawImg.dto';
import { QuerMyChatLogDto } from './dto/queryMyChatLog.dto';
import { ExportExcelChatlogDto } from './dto/exportExcelChatlog.dto';
import { ChatListDto } from './dto/chatList.dto';
import { DelDto } from './dto/del.dto';
import { DelByGroupDto } from './dto/delByGroup.dto';
import { QueryByAppIdDto } from './dto/queryByAppId.dto';
export declare class ChatLogController {
    private readonly chatLogService;
    constructor(chatLogService: ChatLogService);
    querDrawLog(query: QuerMyChatLogDto, req: Request): Promise<import("./chatLog.entity").ChatLogEntity[]>;
    recDrawImg(body: recDrawImgDto): Promise<string>;
    querAllDrawLog(params: QuerAllDrawLogDto): Promise<{
        rows: import("./chatLog.entity").ChatLogEntity[];
        count: number;
    }>;
    queryAllChatLog(params: QuerAllChatLogDto, req: Request): Promise<{
        rows: import("./chatLog.entity").ChatLogEntity[];
        count: number;
    }>;
    exportExcel(body: ExportExcelChatlogDto, res: Response): Promise<void>;
    chatList(req: Request, params: ChatListDto): Promise<{
        chatId: number;
        dateTime: string;
        text: string;
        inversion: boolean;
        error: boolean;
        conversationOptions: any;
        requestOptions: any;
    }[]>;
    del(req: Request, body: DelDto): Promise<string>;
    delByGroupId(req: Request, body: DelByGroupDto): Promise<string>;
    byAppId(req: Request, params: QueryByAppIdDto): Promise<{
        rows: import("./chatLog.entity").ChatLogEntity[];
        count: number;
    }>;
}
