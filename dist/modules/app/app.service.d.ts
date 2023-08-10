import { AppCatsEntity } from './appCats.entity';
import { Repository } from 'typeorm';
import { CreateCatsDto } from './dto/createCats.dto';
import { DeleteCatsDto } from './dto/deleteCats.dto';
import { UpdateCatsDto } from './dto/updateCats.dto';
import { QuerCatsDto } from './dto/queryCats.dto';
import { CreateAppDto } from './dto/createApp.dto';
import { UpdateAppDto } from './dto/updateApp.dto';
import { OperateAppDto } from './dto/deleteApp.dto';
import { QuerAppDto } from './dto/queryApp.dto';
import { AppEntity } from './app.entity';
import { CollectAppDto } from './dto/collectApp.dto';
import { UserAppsEntity } from './userApps.entity';
import { Request } from 'express';
import { CustomAppDto } from './dto/custonApp.dto';
export declare class AppService {
    private readonly appCatsEntity;
    private readonly appEntity;
    private readonly userAppsEntity;
    constructor(appCatsEntity: Repository<AppCatsEntity>, appEntity: Repository<AppEntity>, userAppsEntity: Repository<UserAppsEntity>);
    createAppCat(body: CreateCatsDto): Promise<CreateCatsDto & AppCatsEntity>;
    delAppCat(body: DeleteCatsDto): Promise<string>;
    updateAppCats(body: UpdateCatsDto): Promise<string>;
    appCatsList(query: QuerCatsDto): Promise<{
        rows: AppCatsEntity[];
        count: number;
    }>;
    appList(req: Request, query: QuerAppDto, orderKey?: string): Promise<{
        rows: AppEntity[];
        count: number;
    }>;
    frontAppList(req: Request, query: QuerAppDto, orderKey?: string): Promise<{
        rows: AppEntity[];
        count: number;
    }>;
    createApp(body: CreateAppDto): Promise<CreateAppDto & AppEntity>;
    customApp(body: CustomAppDto, req: Request): Promise<"修改成功" | ({
        appId: number;
        userId: number;
        appType: string;
        public: boolean;
        status: number;
        catId: number;
    } & UserAppsEntity)>;
    updateApp(body: UpdateAppDto): Promise<string>;
    delApp(body: OperateAppDto): Promise<string>;
    auditPass(body: OperateAppDto): Promise<string>;
    auditFail(body: OperateAppDto): Promise<string>;
    delMineApp(body: OperateAppDto, req: Request): Promise<string>;
    collect(body: CollectAppDto, req: Request): Promise<"取消收藏成功!" | "已将应用加入到我的个人工作台！">;
    mineApps(req: Request, query?: {
        page: number;
        size: number;
    }): Promise<{
        rows: UserAppsEntity[];
        count: number;
    }>;
}
