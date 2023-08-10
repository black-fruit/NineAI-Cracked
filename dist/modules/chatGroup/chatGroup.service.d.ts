import { CreateGroupDto } from './dto/createGroup.dto';
import { Request } from 'express';
import { DelGroupDto } from './dto/delGroup.dto';
import { ChatGroupEntity } from './chatGroup.entity';
import { Repository } from 'typeorm';
import { UpdateGroupDto } from './dto/updateGroup.dto';
import { AppEntity } from '../app/app.entity';
export declare class ChatGroupService {
    private readonly chatGroupEntity;
    private readonly appEntity;
    constructor(chatGroupEntity: Repository<ChatGroupEntity>, appEntity: Repository<AppEntity>);
    create(body: CreateGroupDto, req: Request): Promise<{
        title: string;
        userId: number;
    } & ChatGroupEntity>;
    query(req: Request): Promise<ChatGroupEntity[]>;
    update(body: UpdateGroupDto, req: Request): Promise<boolean>;
    del(body: DelGroupDto, req: Request): Promise<string>;
    delAll(req: Request): Promise<string>;
}
