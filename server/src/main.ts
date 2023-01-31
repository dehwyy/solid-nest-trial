import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import setupSwagger from '../config/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  setupSwagger(app);
  await app.listen(process.env.PORT);
}

bootstrap().then(() => console.log(`http://localhost:${process.env.PORT}`));
