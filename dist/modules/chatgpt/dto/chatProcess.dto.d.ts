export declare class Options {
    parentMessageId: string;
    model?: string;
    temperature?: number;
    top_p?: number;
    groupId?: number;
}
export declare class ChatProcessDto {
    prompt: string;
    options: Options;
    systemMessage?: string;
    appId: number;
}
