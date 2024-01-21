import { CustomerService } from './customer.service';
import { CustomerDto, customerFilterDto } from './dto/customer.dto';
export declare class CustomerController {
    private readonly customerService;
    constructor(customerService: CustomerService);
    create(data: CustomerDto, response: any): any;
    findAll(req: customerFilterDto, response: any): Promise<any>;
    findOne(id: string, response: any): Promise<any>;
    update(id: string, updateCustomerDto: CustomerDto, response: any): Promise<any>;
    remove(id: string, response: any): Promise<any>;
}
