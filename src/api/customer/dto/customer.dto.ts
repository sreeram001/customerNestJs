export type CustomerDto = {

    readonly name: string;

    readonly age: number;

    uId: string;

    // for JSON[] 
    readonly orderData: JSON[];
    
}


export class customerFilterDto {

    readonly name: string;

    readonly status: boolean;

    readonly limit: number;

    readonly page: number;

    readonly sortName: string;

    readonly sort: number;

}