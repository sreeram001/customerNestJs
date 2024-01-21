export declare type CustomerDto = {
    readonly name: string;
    readonly age: number;
    uId: string;
};
export declare class customerFilterDto {
    readonly name: string;
    readonly status: boolean;
    readonly limit: number;
    readonly page: number;
    readonly sortName: string;
    readonly sort: number;
}
