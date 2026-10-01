# Lumo — portfólio comercial

Next.js 16, App Router, TypeScript, Tailwind 4, GSAP/ScrollTrigger e Lenis. Sem banco, tracking ou depoimentos fictícios.

## Rodar

```sh
npm install
npm run dev
npm run build
npm run lint
npm run typecheck
```

Com o servidor de produção rodando em `localhost:3000`, as verificações de navegador podem ser repetidas com `node scripts/browser-check.mjs` e `node scripts/motion-check.mjs` (Microsoft Edge instalado). Regras de preço, pagamento e encoding do WhatsApp: `node scripts/config-check.mjs`. Capturas são salvas em `test-results/`.

## Configuração antes da publicação

Copie `.env.example` para `.env.local` e preencha:

- `NEXT_PUBLIC_OWNER_NAME`: nome público.
- `NEXT_PUBLIC_WHATSAPP_NUMBER`: número real com DDI e DDD, somente dígitos.
- `NEXT_PUBLIC_SITE_URL`: URL absoluta de produção, sem barra final. Habilita canonical, URLs do sitemap e metadataBase.

Em `src/config/site.ts`, configure e-mail e links sociais reais. Campos vazios não são exibidos. Sem WhatsApp, CTAs levam ao contato e o formulário oferece o resumo copiável; não abre um número fictício.

Preços em `src/config/pricing.ts`, projetos em `src/config/projects.ts`, serviços e navegação nos respectivos arquivos de configuração. Condições de pagamento e manutenção em `site.ts`.

## Imagens e projetos

`public/Eu.png` é uma cópia exata do original, sem edição. As quatro imagens secundárias estão em `public/images`, baixadas do Unsplash e usadas como referências em projetos explicitamente conceituais. Fontes:

- Restaurante: asset Unsplash 1517248135467-4c7edcad34c4.
- Arquitetura: asset Unsplash 1600210492486-724fe5c67fb0.
- Clínica: asset Unsplash 1629909613654-28e377c37b09.
- Hotel: asset Unsplash 1611892440504-42a792e24d32.

As rotas `/projetos/[slug]` são previews autorais navegáveis, não sites de clientes ou cases com resultados. Substitua os dados por projetos reais quando disponíveis.

## Movimento e acessibilidade

Lenis usa o ticker do GSAP no desktop com ponteiro preciso. ScrollTrigger tem cleanup e recalcula a distância do portfólio no resize. Mobile usa fluxo vertical e scroll nativo. `prefers-reduced-motion` remove smooth scroll, pins, parallax e reveals. Conteúdo permanece visível se JavaScript falhar.

## Publicação

Compatível com Vercel. Configure as variáveis no ambiente de produção antes do build. Uso comercial exige um plano de hospedagem apropriado; não presumir elegibilidade ao plano Hobby. Sitemap fica vazio até a URL real ser configurada para evitar domínio inventado.

Analytics e pixels não estão instalados. Ao adicionar tracking, revisar a política de privacidade e o consentimento aplicável. O formulário apenas monta uma mensagem no navegador; o usuário conclui o envio no WhatsApp.
