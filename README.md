# meu-ecossistema-rio
🚀 Ecossistema Rio v3.1: Monorepo Enterprise.
Este é um monorepo de alta performance e escalabilidade, focado em Hospitalidade e Serviços para a Zona Sul do Rio de Janeiro. O projeto utiliza uma arquitetura multitenant (White Label) para gerenciar múltiplos negócios como o Bares Inteligentes e o Portallar Utilitis a partir de uma base de código unificada.

🏗️ Arquitetura Técnica
O projeto foi construído utilizando o Turborepo para orquestração e NPM Workspaces para gestão de pacotes, garantindo que a segurança e a escalabilidade sejam o "fio terra" do sistema.

Stack Principal
Framework: Next.js 14+ (Apps)

Orquestrador: Turborepo

Banco de Dados: PostgreSQL via Supabase (Região: sa-east-1)

ORM: Prisma com Connection Pooling

Validação: Zod para Single Source of Truth

Linguagem: TypeScript (Full-stack Type Safety)

📂 Estrutura do Monorepo
.
├── apps/
│   ├── bares-inteligentes/    # PWA de Gastronomia e Hospitality
│   └── portallar-utilitis/    # PWA de Serviços Residenciais
├── packages/
│   ├── database/             # Prisma Client & Supabase Singleton
│   ├── validation/           # Schemas Zod compartilhados
│   └── ui/                   # Design System "Carioquice"
├── turbo.json                # Configurações do Turborepo
└── package.json              # Gerenciamento de Workspaces

🚀 Como Iniciar
1. Pré-requisitos
Node.js >= 18.0.0

Instância PostgreSQL no Supabase (sa-east-1)

2. Instalação e Configuração
Clone o repositório e instale as dependências:

Bash
npm install
Configure o arquivo .env na raiz com as suas credenciais do Supabase (Transaction e Direct URLs).

3. Sincronização do Banco de Dados
Sincronize o Schema do Prisma com o seu banco de dados em São Paulo:

Bash
npx turbo db:push
4. Populando Dados (Seed)
Execute o script de seed para inserir os dados iniciais (Restaurante Joaquina, Portallar, etc):

Bash
npx turbo seed
🛡️ Princípios de Segurança e Escalabilidade
Single Source of Truth: Todas as validações de dados (Frontend e Backend) derivam do pacote @meu-rio/validation.

Singleton Connection: O banco de dados utiliza o padrão Singleton para evitar exaustão de conexões em ambientes Serverless.

Low Latency: Infraestrutura hospedada em São Paulo para garantir <30ms de resposta no Rio de Janeiro.

White Label: Branding dinâmico injetado via banco de dados para suportar múltiplos parceiros em uma única interface.

📅 Roadmap 2026
[x] Configuração do Monorepo e Workspaces

[x] Integração com Supabase (sa-east-1)

[x] Implementação do Schema Multitenant

[ ] Desenvolvimento do Core PWA (Next.js)

[ ] Integração Web3 e Carteiras Crypto (Tech Showtime)

[ ] Lançamento do Guia Copa do Mundo 2026

Desenvolvido por Luis Aguiar Tech
Foco em inovação, hospitalidade e tecnologia para o Rio de Janeiro.
