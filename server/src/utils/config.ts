import * as dotenv from 'dotenv';

dotenv.config();
let path;
switch (process.env.NODE_ENV) {
  case 'test':
    path = `${__dirname}/../../.env.test`;
    break;
  case 'production':
    path = `${__dirname}/../../.env.production`;
    break;
  default:
    path = `${__dirname}/../../.env.development`;
}
dotenv.config({ path: path });

export const APP_ID = process.env.APP_ID;
export const LOG_LEVEL = process.env.LOG_LEVEL;
export const SERVER_PORT = process.env.PORT;
export const SERVER_BASE = process.env.BASE_URI;
export const SERVER_HEALTH = process.env.HEALTH_URI;
export const API_BASE_URL = process.env.MELI_API_BASE_URL;
export const SWAGGER_DESCRIPTION = process.env.SWAGGER_API_DESCRIPTION;
export const SWAGGER_API_VERSION = process.env.SWAGGER_API_VERSION;
export const SWAGGER_API_TITLE = process.env.SWAGGER_API_TITLE;
export const SWAGGER_API_URI = process.env.SWAGGER_API_URI;
