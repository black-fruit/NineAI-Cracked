import { GlobalConfigService } from './../globalConfig/globalConfig.service';
export declare class FanyiService {
    private readonly globalConfigService;
    constructor(globalConfigService: GlobalConfigService);
    convertToEnglish(text: string): Promise<any>;
}
