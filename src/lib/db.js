import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  log: ['query'],
  datasourceUrl: process.env.DATABASE_URL,
});

export default prisma;
