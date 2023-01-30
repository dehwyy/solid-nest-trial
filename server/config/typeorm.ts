import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import path from 'path';
import * as dotenv from 'dotenv';
dotenv.config({
  path: path.resolve(__dirname, '..', '..', 'config', '.dev.env'),
});
const config = {
  port: process.env.POSTGRES_PORT,
  host: process.env.POSTGRES_HOST,
} as TypeOrmModuleOptions;

export default config;
