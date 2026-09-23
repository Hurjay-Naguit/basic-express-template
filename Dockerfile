FROM node:24-alpine

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@12.4.1 --activate

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

RUN pnpm install
RUN pnpm approve-builds --all

COPY . .

RUN chown -R node:node /app

USER node

ENV PORT=5000

EXPOSE ${PORT}

CMD ["pnpm", "run", "dev"]