import { z } from 'zod';

// Schema base para qualquer parceiro do ecossistema
export const PartnerSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(3, "O nome precisa de pelo menos 3 letras"),
  slug: z.string().transform(val => val.toLowerCase()), // ex: 'joaquina-botafogo'
  
  // A Lógica Booleana do seu Ecossistema
  type: z.enum(['GASTRONOMIA', 'SERVICO_FAMILIAR', 'TECH']),
  
  // Configurações de Branding (Para o Tailwind ler depois)
  theme: z.object({
    primaryColor: z.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/),
    secondaryColor: z.string().optional(),
  }),

  location: z.object({
    bairro: z.enum(['Botafogo', 'Humaitá', 'Copacabana', 'Outro']),
    address: z.string(),
  }),
  
  isActive: z.boolean().default(true),
});

// Tipo exportado para o TypeScript (Intellisense em todo o Monorepo)
export type Partner = z.infer<typeof PartnerSchema>;