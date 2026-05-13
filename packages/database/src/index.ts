import { PrismaClient } from "@prisma/client";

/**
 * Declaração global para evitar múltiplas instâncias do Prisma Client
 * em ambiente de desenvolvimento (Hot Reloading).
 */
const globalForPrisma = global as unknown as { prisma: PrismaClient };

/**
 * O Singleton: Se já existir uma instância no objeto global, usa ela.
 * Caso contrário, cria uma nova.
 */
export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

/**
 * Exporta tudo do Prisma Client para que você possa importar tipos
 * como 'Partner' ou 'PartnerType' diretamente deste pacote.
 */
export * from "@prisma/client";

/**
 * Aqui você também pode exportar suas validações do Zod para uso unificado
 */
export * from "@meu-rio/validation";