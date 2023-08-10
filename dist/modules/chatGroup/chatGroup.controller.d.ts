import { ChatGroupService } from './chatGroup.service';
import { CreateGroupDto } from './dto/createGroup.dto';
import { Request } from 'express';
import { DelGroupDto } from './dto/delGroup.dto';
import { UpdateGroupDto } from './dto/updateGroup.dto';
export declare class ChatGroupController {
    private readonly chatGroupService;
    constructor(chatGroupService: ChatGroupService);
    create(body: CreateGroupDto, req: Request): Promise<{
        title: string;
        userId: number;
    } & import("./chatGroup.entity").ChatGroupEntity>;
    query(req: Request): Promise<import("./chatGroup.entity").ChatGroupEntity[]>;
    update(body: UpdateGroupDto, req: Request): Promise<boolean>;
    del(body: DelGroupDto, req: Request): Promise<string>;
    delAll(req: Request): Promise<string>;
}
