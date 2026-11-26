import { PrismaClient } from '@prisma/client';

// Ensure DATABASE_URL is constructed if individual DB environment variables are provided
if (!process.env.DATABASE_URL) {
  const host = process.env.DB_HOST || '127.0.0.1';
  const port = process.env.DB_PORT || '3306';
  const user = process.env.DB_USER || 'u856489652_mohanbirajdar';
  const pass = encodeURIComponent(process.env.DB_PASSWORD || 'Symetrique26$');
  const db = process.env.DB_NAME || 'u856489652_Vitiligo';
  process.env.DATABASE_URL = `mysql://${user}:${pass}@${host}:${port}/${db}`;
}

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['warn', 'error'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

