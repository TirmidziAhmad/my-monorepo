# My Monorepo

This is a pnpm-based monorepo powered by [Turborepo](https://turbo.build/repo).

## What's inside?

This Turborepo includes the following apps and packages:

### Apps

- `portfolio`: A modern [Next.js](https://nextjs.org/) portfolio site.
  - **Tech Stack**: Next.js 15+, Tailwind CSS 4, GSAP, Framer Motion, Lucide React.
  - **Location**: `apps/portfolio`
- `api`: A minimal [Express.js](https://expressjs.com/) backend.
  - **Tech Stack**: Express, TypeScript, Nodemon.
  - **Location**: `apps/api`

### Shared Packages

- `@repo/ui`: A shared React component library used by the `portfolio` app.
- `@repo/eslint-config`: Shared `eslint` configurations.
- `@repo/typescript-config`: Shared `tsconfig.json` files used throughout the monorepo.

## Getting Started

### Installation

Install dependencies from the root:

```sh
pnpm install
```

### Development

To start all apps in development mode:

```sh
pnpm dev
```

To develop a specific app:

```sh
# Start portfolio only
pnpm dev --filter=portfolio

# Start api only
pnpm dev --filter=api
```

### Build

To build all apps and packages:

```sh
pnpm build
```

To build a specific app:

```sh
pnpm build --filter=portfolio
```

## Utilities

- **TypeScript** for static type checking
- **ESLint** for code linting
- **Prettier** for code formatting

## Remote Caching

Turborepo can use [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching) to share cache artifacts across machines.

To link your Turborepo to your Remote Cache:

```sh
npx turbo link
```
