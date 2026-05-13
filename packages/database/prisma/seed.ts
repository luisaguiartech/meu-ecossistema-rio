import { PrismaClient, PartnerType } from '@prisma/client';

const prisma = new PrismaClient();

const partners = [
  {
    name: 'Bar do João',
    slug: 'bar-do-joao-botafogo',
    type: PartnerType.GASTRONOMIA,
    primaryColor: '#FF5733',
    secondaryColor: '#C70039',
    bairro: 'Botafogo',
    address: 'Rua das Laranjeiras, 123',
    isActive: true,
  },
  {
    name: 'Portallar Utilitis',
    slug: 'portallar-utilitis-humaita',
    type: PartnerType.SERVICO_FAMILIAR,
    primaryColor: '#3498DB',
    secondaryColor: '#2980B9',
    bairro: 'Humaitá',
    address: 'Rua Voluntários da Pátria, 456',
    isActive: true,
  },
  {
    name: 'Luis Aguiar Tech',
    slug: 'luis-aguiar-tech',
    type: PartnerType.TECH,
    primaryColor: '#9B59B6',
    secondaryColor: '#8E44AD',
    bairro: 'Botafogo',
    address: 'Rua do Catete, 789',
    isActive: true,
  },
  {
    name: 'Restaurante Sabor Local',
    slug: 'sabor-local-copacabana',
    type: PartnerType.GASTRONOMIA,
    primaryColor: '#27AE60',
    secondaryColor: '#229954',
    bairro: 'Copacabana',
    address: 'Avenida Nossa Senhora de Copacabana, 101',
    isActive: true,
  },
];

async function main() {
  console.log('🌱 Starting seed...');

  for (const partner of partners) {
    const created = await prisma.partner.upsert({
      where: { slug: partner.slug },
      update: {},
      create: partner,
    });
    console.log(`✅ Created partner: ${created.name} (${created.slug})`);
  }

  console.log('✅ Seed completed!');
}

main()
  .catch((e) => {
    console.error('❌ Seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });