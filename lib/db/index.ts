import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { usersTable } from './schema';
export const db = drizzle(process.env.POSTGRES_URL!);
