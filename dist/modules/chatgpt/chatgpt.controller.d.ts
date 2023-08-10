import { ChatgptService } from './chatgpt.service';
import { ChatProcessDto } from './dto/chatProcess.dto';
import { Request, Response } from 'express';
import { ChatDrawDto } from './dto/chatDraw.dto';
import { AddKeyDto } from './dto/addKey.dto';
import { GetKeyListDto } from './dto/getKeyList.dto';
import { UpdateKeyDto } from './dto/updateKey.dto';
import { AddWhiteUserDto } from './dto/addWhiteUser.dto';
import { GetWhiteUserListDto } from './dto/getWhiteUserList.dto';
import { UpdateWhiteUserDto } from './dto/updateWhiteUser.dto';
import { DeleteKeyDto } from './dto/deleteKey.dto';
import { BulkCreateKeyDto } from './dto/bulkCreateKey.dto';
import { GlobalConfigService } from '../globalConfig/globalConfig.service';
export declare class ChatgptController {
    private readonly chatgptService;
    private readonly globalConfigService;
    constructor(chatgptService: ChatgptService, globalConfigService: GlobalConfigService);
    chatProcess(body: ChatProcessDto, req: Request, res: Response): Promise<any>;
    mjAssociate(body: ChatProcessDto, req: Request): Promise<any>;
    mjFanyi(body: ChatProcessDto, req: Request): Promise<any>;
    chatmind(body: ChatProcessDto, req: Request, res: Response): Promise<any>;
    draw(body: ChatDrawDto, req: Request): Promise<any[]>;
    getKeyDetail(key: string): Promise<{
        totalAmount: string;
        useAmount: string;
        balance: string;
        isBindCard: any;
        expirDate: string;
        status: number;
    } | {
        status: number;
        totalAmount?: undefined;
        useAmount?: undefined;
        balance?: undefined;
        isBindCard?: undefined;
        expirDate?: undefined;
    }>;
    getKeyList(params: GetKeyListDto, req: Request): Promise<{
        rows: import("./gptkeys.entity").GptKeysEntity[];
        count: number;
    }>;
    getGptModelList(key: string): Promise<string[]>;
    addKey(body: AddKeyDto): Promise<AddKeyDto & import("./gptkeys.entity").GptKeysEntity>;
    bulkCreateKey(body: BulkCreateKeyDto): Promise<string>;
    updateKey(body: UpdateKeyDto): Promise<string>;
    deleteKey(body: DeleteKeyDto): Promise<string>;
    addWhiteUser(body: AddWhiteUserDto): Promise<AddWhiteUserDto & import("./whiteList.entity").WhiteListEntity>;
    updateWhiteUser(body: UpdateWhiteUserDto): Promise<string>;
    getWhiteListUser(query: GetWhiteUserListDto, req: Request): Promise<{
        rows: import("./whiteList.entity").WhiteListEntity[];
        count: number;
    }>;
}
