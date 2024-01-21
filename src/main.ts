import { NestFactory } from '@nestjs/core';
import { AppModule } from './api/app.module';
import { AppConfig } from './api/config';
import * as compression from 'compression';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(compression());

  await app.listen(AppConfig.PORT);
}
bootstrap();
