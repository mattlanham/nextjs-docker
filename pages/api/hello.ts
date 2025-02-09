// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/lib/db/index';
import { usersTable, SelectUser } from '@/lib/db/schema';

console.log(process.env.POSTGRES_URL);

type Data = {
  users: Array<SelectUser>;
};

export default async function hello(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const result = await db.select().from(usersTable);
  res.status(200).json({ users: result });
}
