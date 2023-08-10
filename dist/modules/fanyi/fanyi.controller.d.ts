import { FanyiService } from './fanyi.service';
export declare class FanyiController {
    private readonly fanyiService;
    constructor(fanyiService: FanyiService);
    convertToEnglish(text: string): Promise<any>;
}
