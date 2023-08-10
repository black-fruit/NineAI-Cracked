import { AppService } from './app.service';
import { CreateCatsDto } from './dto/createCats.dto';
import { UpdateCatsDto } from './dto/updateCats.dto';
import { DeleteCatsDto } from './dto/deleteCats.dto';
import { QuerCatsDto } from './dto/queryCats.dto';
import { CreateAppDto } from './dto/createApp.dto';
import { UpdateAppDto } from './dto/updateApp.dto';
import { OperateAppDto } from './dto/deleteApp.dto';
import { QuerAppDto } from './dto/queryApp.dto';
import { CollectAppDto } from './dto/collectApp.dto';
import { Request } from 'express';
import { CustomAppDto } from './dto/custonApp.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    appCatsList(query: QuerCatsDto): Promise<{
        rows: import("./appCats.entity").AppCatsEntity[];
        count: number;
    }>;
    catsList(): Promise<{
        rows: import("./appCats.entity").AppCatsEntity[];
        count: number;
    }>;
    createAppCat(body: CreateCatsDto): Promise<CreateCatsDto & import("./appCats.entity").AppCatsEntity>;
    updateAppCats(body: UpdateCatsDto): Promise<string>;
    delAppCat(body: DeleteCatsDto): Promise<string>;
    appList(req: Request, query: QuerAppDto): Promise<{
        rows: import("./app.entity").AppEntity[];
        count: number;
    }>;
    list(req: Request, query: QuerAppDto): Promise<{
        rows: import("./app.entity").AppEntity[];
        count: number;
    }>;
    createApp(body: CreateAppDto): Promise<CreateAppDto & import("./app.entity").AppEntity>;
    customApp(body: CustomAppDto, req: Request): Promise<"修改成功" | ({
        appId: number;
        userId: number;
        appType: string;
        public: boolean;
        status: number;
        catId: number;
    } & import("./userApps.entity").UserAppsEntity)>;
    updateApp(body: UpdateAppDto): Promise<string>;
    delApp(body: OperateAppDto): Promise<string>;
    auditPass(body: OperateAppDto): Promise<string>;
    auditFail(body: OperateAppDto): Promise<string>;
    delMineApp(body: OperateAppDto, req: Request): Promise<string>;
    collect(body: CollectAppDto, req: Request): Promise<"取消收藏成功!" | "已将应用加入到我的个人工作台！">;
    mineApps(req: Request): Promise<{
        rows: import("./userApps.entity").UserAppsEntity[];
        count: number;
    }>;
}
