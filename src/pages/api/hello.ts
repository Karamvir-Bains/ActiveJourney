// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}

model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  first_name  String?
  last_name  String?
  password   String  @unique
  // layout ? object type?
}
