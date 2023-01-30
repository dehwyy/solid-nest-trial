import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import setupSwagger from '../config/swagger';
import * as path from 'path';
import * as dotenv from 'dotenv';
dotenv.config({
  path: path.resolve(__dirname, '..', '..', 'config', '.dev.env'),
});
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  setupSwagger(app);
  console.log(process.env.PORT, process.env.NODE_ENV);
  await app.listen(process.env.PORT);
}

bootstrap().then(() => console.log(`http://localhost:${process.env.PORT}`));
