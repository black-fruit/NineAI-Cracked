import { UserEntity } from './../user/user.entity';
import { Repository } from 'typeorm';
import { OrderEntity } from './order.entity';
import { CramiPackageEntity } from '../crami/cramiPackage.entity';
import { BuyDto } from './dto/buy.dto';
import { Request } from 'express';
import { PayService } from '../pay/pay.service';
import { QueryByOrderIdDto } from './dto/queryByOrder.dto';
import { GlobalConfigService } from '../globalConfig/globalConfig.service';
import { QuerAllOrderDto } from './dto/queryAllOrder.dto';
export declare class OrderService {
    private readonly orderEntity;
    private readonly cramiPackageEntity;
    private readonly userEntity;
    private readonly payService;
    private readonly globalConfigService;
    constructor(orderEntity: Repository<OrderEntity>, cramiPackageEntity: Repository<CramiPackageEntity>, userEntity: Repository<UserEntity>, payService: PayService, globalConfigService: GlobalConfigService);
    buy(params: BuyDto, req: Request): Promise<any>;
    queryByOrderId(req: Request, params: QueryByOrderIdDto): Promise<OrderEntity>;
    create(userId: number, goodsId: number, count: number, payType: string): Promise<OrderEntity>;
    query(userId: number, page: number, size: number): Promise<[OrderEntity[], number]>;
    queryAllOrder(params: QuerAllOrderDto): Promise<{
        rows: OrderEntity[];
        count: number;
    }>;
    deleteOrder(body: QueryByOrderIdDto): Promise<import("typeorm").DeleteResult>;
}
