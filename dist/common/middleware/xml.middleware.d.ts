import { NestMiddleware } from '@nestjs/common';
export declare class XMLMiddleware implements NestMiddleware {
    use(req: any, res: any, next: () => void): void;
}
