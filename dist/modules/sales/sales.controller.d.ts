import { SalesService } from './sales.service';
import { RecordsQueryDto } from './dto/recordsQuery.dto';
import { AppForMoneyDto } from './dto/appForMoney.dto';
import { Request } from 'express';
import { drawMoneyOrderDto } from './dto/drawMoneyOrder.dto';
import { salesOrderDto } from './dto/salesOrder.dto';
import { AuditOrderDto } from './dto/auditOrder.dto';
import { SalesUserListDto } from './dto/salesUserList.dto';
import { UpdateUserSalesDto } from './dto/updateUserSales.dto';
export declare class SalesController {
    private readonly salesService;
    constructor(salesService: SalesService);
    getMineAccount(req: Request): Promise<{
        orderCount: number;
        inviteCount: number;
        inviteLinkCount: number;
        length: number;
        toString(): string;
        toLocaleString(): string;
        pop(): any;
        push(...items: any[]): number;
        concat(...items: ConcatArray<any>[]): any[];
        concat(...items: any[]): any[];
        join(separator?: string): string;
        reverse(): any[];
        shift(): any;
        slice(start?: number, end?: number): any[];
        sort(compareFn?: (a: any, b: any) => number): any[];
        splice(start: number, deleteCount?: number): any[];
        splice(start: number, deleteCount: number, ...items: any[]): any[];
        unshift(...items: any[]): number;
        indexOf(searchElement: any, fromIndex?: number): number;
        lastIndexOf(searchElement: any, fromIndex?: number): number;
        every<S extends any>(predicate: (value: any, index: number, array: any[]) => value is S, thisArg?: any): this is S[];
        every(predicate: (value: any, index: number, array: any[]) => unknown, thisArg?: any): boolean;
        some(predicate: (value: any, index: number, array: any[]) => unknown, thisArg?: any): boolean;
        forEach(callbackfn: (value: any, index: number, array: any[]) => void, thisArg?: any): void;
        map<U>(callbackfn: (value: any, index: number, array: any[]) => U, thisArg?: any): U[];
        filter<S_1 extends any>(predicate: (value: any, index: number, array: any[]) => value is S_1, thisArg?: any): S_1[];
        filter(predicate: (value: any, index: number, array: any[]) => unknown, thisArg?: any): any[];
        reduce(callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: any[]) => any): any;
        reduce(callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: any[]) => any, initialValue: any): any;
        reduce<U_1>(callbackfn: (previousValue: U_1, currentValue: any, currentIndex: number, array: any[]) => U_1, initialValue: U_1): U_1;
        reduceRight(callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: any[]) => any): any;
        reduceRight(callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: any[]) => any, initialValue: any): any;
        reduceRight<U_2>(callbackfn: (previousValue: U_2, currentValue: any, currentIndex: number, array: any[]) => U_2, initialValue: U_2): U_2;
        find<S_2 extends any>(predicate: (this: void, value: any, index: number, obj: any[]) => value is S_2, thisArg?: any): S_2;
        find(predicate: (value: any, index: number, obj: any[]) => unknown, thisArg?: any): any;
        findIndex(predicate: (value: any, index: number, obj: any[]) => unknown, thisArg?: any): number;
        fill(value: any, start?: number, end?: number): any[];
        copyWithin(target: number, start: number, end?: number): any[];
        entries(): IterableIterator<[number, any]>;
        keys(): IterableIterator<number>;
        values(): IterableIterator<any>;
        includes(searchElement: any, fromIndex?: number): boolean;
        flatMap<U_3, This = undefined>(callback: (this: This, value: any, index: number, array: any[]) => U_3 | readonly U_3[], thisArg?: This): U_3[];
        flat<A, D extends number = 1>(this: A, depth?: D): FlatArray<A, D>[];
        [Symbol.iterator](): IterableIterator<any>;
        [Symbol.unscopables](): {
            copyWithin: boolean;
            entries: boolean;
            fill: boolean;
            find: boolean;
            findIndex: boolean;
            keys: boolean;
            values: boolean;
        };
        at(index: number): any;
    }>;
    getMineRecords(req: Request, query: RecordsQueryDto): Promise<{
        rows: any[];
        count: number;
    }>;
    inviteRecords(req: Request, query: RecordsQueryDto): Promise<{
        rows: any[];
        count: number;
    }>;
    appForMoney(req: Request, body: AppForMoneyDto): Promise<void>;
    drawMoneyOrder(req: Request, query: drawMoneyOrderDto): Promise<{
        rows: any[];
        count: number;
    }>;
    salesOrder(req: Request, query: salesOrderDto): Promise<{
        rows: any[];
        count: number;
    }>;
    auditOrder(req: Request, body: AuditOrderDto): Promise<string>;
    salesUserList(req: Request, query: SalesUserListDto): Promise<{
        rows: import("./salesUsers.entity").SalesUsersEntity[];
        count: number;
    }>;
    updateUserSales(req: Request, body: UpdateUserSalesDto): Promise<string>;
}
