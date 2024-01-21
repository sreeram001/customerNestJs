import { AppConfig } from './config';
import { AppService } from './app.service';

import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';

import { Module } from '@nestjs/common';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async () => ({
        uri: AppConfig.MONGO_URI,
      }),
    }),

    CustomerModule,
  ],

  controllers: [AppController],

  providers: [AppService],

  exports: [AppService]

})

export class AppModule {


}
