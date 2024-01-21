import { Document } from 'mongoose';
export declare type CustomerDocument = Customer & Document;
export declare class Customer {
    uId: string;
    name: string;
    age: number;
    status: boolean;
}
export declare const CustomerSchema: import("mongoose").Schema<Document<Customer, any, any>, import("mongoose").Model<Document<Customer, any, any>, any, any, any>, any>;
