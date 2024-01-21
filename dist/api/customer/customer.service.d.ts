import { CustomerModule } from './customer.module';
import { Model } from 'mongoose';
import { CustomerDto } from './dto/customer.dto';
export declare class CustomerService {
    private customerModel;
    constructor(customerModel: Model<CustomerModule>);
    create(data: CustomerDto): Promise<import("mongoose").Document<any, any, CustomerModule> & CustomerModule & {
        _id: unknown;
    }>;
    findAll(): Promise<(import("mongoose").Document<any, any, CustomerModule> & CustomerModule & {
        _id: unknown;
    })[]>;
    getCustomerCount(customerFilterDto: any): Promise<number>;
    getCustomerFilter(customerFilterDto: any, ratingFieldLimit: any, page: any, sortValue: any): Promise<(import("mongoose").Document<any, any, CustomerModule> & CustomerModule & {
        _id: unknown;
    })[]>;
    findOne(id: string): Promise<CustomerModule>;
    update(id: string, data: CustomerDto): Promise<import("mongoose").Document<any, any, CustomerModule> & CustomerModule & {
        _id: unknown;
    }>;
    remove(id: string): Promise<import("mongoose").Document<any, any, CustomerModule> & CustomerModule & {
        _id: unknown;
    }>;
}
