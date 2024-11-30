import * as dotenv from 'dotenv';
dotenv.config();
export const DB_NAME: string = process.env.DB_NAME || '';
export const DB_PASSWORD: string = process.env.DB_PASSWORD || '';
export const DB_HOST: string = process.env.DB_HOST || 'localhost';
export const DB_PORT: number = process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432;
export const DB_USERNAME: string = process.env.DB_USERNAME || 'postgres';

export const PORT:number=process.env.PORT ? parseInt(process.env.PORT,10):3000;