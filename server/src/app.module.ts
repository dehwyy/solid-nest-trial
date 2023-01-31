import { Module } from '@nestjs/common';
import { CardModule } from './card/card.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import typeormConfig from '../config/typeorm';
import resolveEnvPath from '../utils/resolveEnvPath';

console.log(typeormConfig);
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: resolveEnvPath(__dirname, process.env.NODE_ENV),
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(typeormConfig),
    CardModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
