import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import resolveEnvPath from '../utils/resolveEnvPath';
dotenv.config({
  path: resolveEnvPath(__dirname, process.env.NODE_ENV),
});
const config = {
  type: 'postgres',
  port: Number(process.env.POSTGRES_PORT),
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  synchronize: Boolean(process.env.SYNC),
  entities: ['dist/src/**/*.entity.js'],
} as TypeOrmModuleOptions;
export default config;
