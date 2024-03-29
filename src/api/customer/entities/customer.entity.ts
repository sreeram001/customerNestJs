import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CustomerDocument = Customer & Document;

@Schema({ timestamps: true })
export class Customer {

  @Prop()
  uId: string;

  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop({
    default: true
  })
  status: boolean;

  @Prop({
    type: [Object], 
    default: []
  }) // JSON array
  orderData: JSON[];

}

export const CustomerSchema = SchemaFactory.createForClass(Customer);