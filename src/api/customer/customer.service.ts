import { Injectable } from '@nestjs/common';
import { Customer } from './entities/customer.entity';
import { CustomerModule } from './customer.module';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CustomerDto } from './dto/customer.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel('customer')
    private customerModel: Model<CustomerModule>,

  ) { }

  async create(data: CustomerDto) {
    const review = new this.customerModel(data)
    return await review.save();
  }

  async findAll() {
    return await this.customerModel.find().exec();
  }

  async getCustomerCount(customerFilterDto: any) {
    return await this.customerModel.count(customerFilterDto);
  }

  //get Rating field filter based on limit sort and conditions 
  async getCustomerFilter(customerFilterDto: any, ratingFieldLimit: any, page: any, sortValue: any) {
    return await this.customerModel.find(customerFilterDto)
      .limit(Number(ratingFieldLimit))
      .sort(sortValue)
      .skip((page - 1) * ratingFieldLimit)
      .exec();
  }

  async findOne(id: string): Promise<CustomerModule> {
    return await this.customerModel.findById(id).exec();
  }

  async update(id: string, data: CustomerDto) {
    return await this.customerModel.findByIdAndUpdate({ _id: id }, data, { new: true }).exec();
  }

  async remove(id: string) {
    return await this.customerModel.findByIdAndDelete(id)
  }

}
