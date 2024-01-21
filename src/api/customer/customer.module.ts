import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { CustomerSchema } from './entities/customer.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[
    MongooseModule.forFeature([{ name: 'customer', schema: CustomerSchema }]),
    CustomerModule,
  ],
  controllers: [CustomerController],
  providers: [CustomerService],
  exports : [CustomerService]
})
export class CustomerModule {}
