import { ExportExcelChatlogDto } from './dto/exportExcelChatlog.dto';
import { ChatLogEntity } from './chatLog.entity';
import { Repository } from 'typeorm';
import { Request, Response } from 'express';
import { QuerAllDrawLogDto } from './dto/queryAllDrawLog.dto';
import { QuerAllChatLogDto } from './dto/queryAllChatLog.dto';
import { recDrawImgDto } from './dto/recDrawImg.dto';
import { UserEntity } from '../user/user.entity';
import { QuerMyChatLogDto } from './dto/queryMyChatLog.dto';
import { ChatListDto } from './dto/chatList.dto';
import { ChatGroupEntity } from '../chatGroup/chatGroup.entity';
import { DelDto } from './dto/del.dto';
import { DelByGroupDto } from './dto/delByGroup.dto';
import { QueryByAppIdDto } from './dto/queryByAppId.dto';
export declare class ChatLogService {
    private readonly chatLogEntity;
    private readonly userEntity;
    private readonly chatGroupEntity;
    constructor(chatLogEntity: Repository<ChatLogEntity>, userEntity: Repository<UserEntity>, chatGroupEntity: Repository<ChatGroupEntity>);
    saveChatLog(logInfo: any): Promise<any>;
    querDrawLog(req: Request, query: QuerMyChatLogDto): Promise<ChatLogEntity[]>;
    querAllDrawLog(params: QuerAllDrawLogDto): Promise<{
        rows: ChatLogEntity[];
        count: number;
    }>;
    recDrawImg(body: recDrawImgDto): Promise<string>;
    exportExcel(body: ExportExcelChatlogDto, res: Response): Promise<void>;
    querAllChatLog(params: QuerAllChatLogDto, req: Request): Promise<{
        rows: ChatLogEntity[];
        count: number;
    }>;
    chatList(req: Request, params: ChatListDto): Promise<{
        chatId: number;
        dateTime: string;
        text: string;
        inversion: boolean;
        error: boolean;
        conversationOptions: any;
        requestOptions: any;
    }[]>;
    deleteChatLog(req: Request, body: DelDto): Promise<string>;
    delByGroupId(req: Request, body: DelByGroupDto): Promise<string>;
    byAppId(req: Request, body: QueryByAppIdDto): Promise<{
        rows: ChatLogEntity[];
        count: number;
    }>;
}
