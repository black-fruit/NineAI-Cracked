import * as dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
export declare function formatDate(date: string | number | Date, format?: string): string;
export declare function formatCreateOrUpdateDate(input: any, format?: string): any[];
export declare function isExpired(createdAt: Date, days: number): boolean;
export default dayjs;
