import { config } from 'dotenv';
import { resolve } from 'path';

export const NODE_ENV = process.env.NODE_ENV || 'development';

const envFile = NODE_ENV === 'development' ? '.env.development' : '.env';

config({ path: resolve(__dirname, `../${envFile}`) });
config({ path: resolve(__dirname, `../${envFile}.local`), override: true });

// Load all environment variables from .env file

export const PORT = process.env.PORT || 8000;
export const DATABASE_URL = process.env.DATABASE_URL || '';
export const jwtSecretKey = process.env.JWT_SECRET_KEY || 'secret';
export const BASE_URL_NEXT = process.env.BASE_URL_NEXT || '';
export const GMAIL_EMAIL = process.env.GMAIL_EMAIL || '';
export const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD || '';
