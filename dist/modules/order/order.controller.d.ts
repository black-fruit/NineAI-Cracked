import { OrderService } from './order.service';
import { Request } from 'express';
import { BuyDto } from './dto/buy.dto';
import { QueryByOrderIdDto } from './dto/queryByOrder.dto';
import { QuerAllOrderDto } from './dto/queryAllOrder.dto';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    buy(body: BuyDto, req: Request): Promise<any>;
    queryByOrderId(req: Request, query: QueryByOrderIdDto): Promise<import("./order.entity").OrderEntity>;
    queryAllOrder(query: QuerAllOrderDto): Promise<{
        rows: import("./order.entity").OrderEntity[];
        count: number;
    }>;
    deleteOrder(body: QueryByOrderIdDto): Promise<import("typeorm").DeleteResult>;
}
