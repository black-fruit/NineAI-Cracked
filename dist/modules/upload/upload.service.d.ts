import { OnModuleInit } from '@nestjs/common';
import { GlobalConfigService } from '../globalConfig/globalConfig.service';
export declare class UploadService implements OnModuleInit {
    private readonly globalConfigService;
    constructor(globalConfigService: GlobalConfigService);
    private tencentCos;
    onModuleInit(): void;
    uploadFile(file: any): Promise<any>;
    getUploadType(): Promise<"ali" | "tencent" | "chevereto">;
    uploadFileFromUrl({ filename, url, dir }: {
        filename: any;
        url: any;
        dir?: string;
    }): Promise<any>;
    uploadFileByTencentCos({ filename, buffer, dir }: {
        filename: any;
        buffer: any;
        dir: any;
    }): Promise<unknown>;
    uploadFileByTencentCosFromUrl({ filename, url, dir }: {
        filename: any;
        url: any;
        dir: any;
    }): Promise<any>;
    uploadFileByAliOss({ filename, buffer, dir }: {
        filename: any;
        buffer: any;
        dir: any;
    }): Promise<unknown>;
    uploadFileByAliOssFromUrl({ filename, url, dir }: {
        filename: any;
        url: any;
        dir: any;
    }): Promise<any>;
    uploadFileByChevereto({ filename, buffer, dir }: {
        filename?: string;
        buffer: any;
        dir?: string;
    }): Promise<any>;
    uploadFileByCheveretoFromUrl({ filename, url, dir }: {
        filename: any;
        url: any;
        dir: any;
    }): Promise<any>;
    getUploadConfig(type: any): Promise<{
        region: any;
        bucket: any;
        accessKeyId: any;
        accessKeySecret: any;
        Bucket?: undefined;
        Region?: undefined;
        SecretId?: undefined;
        SecretKey?: undefined;
        acceleratedDomain?: undefined;
        key?: undefined;
        uploadPath?: undefined;
    } | {
        Bucket: any;
        Region: any;
        SecretId: any;
        SecretKey: any;
        acceleratedDomain: any;
        region?: undefined;
        bucket?: undefined;
        accessKeyId?: undefined;
        accessKeySecret?: undefined;
        key?: undefined;
        uploadPath?: undefined;
    } | {
        key: any;
        uploadPath: any;
        region?: undefined;
        bucket?: undefined;
        accessKeyId?: undefined;
        accessKeySecret?: undefined;
        Bucket?: undefined;
        Region?: undefined;
        SecretId?: undefined;
        SecretKey?: undefined;
        acceleratedDomain?: undefined;
    }>;
    test(): Promise<any>;
    getBufferFromUrl(url: any): Promise<unknown>;
}
