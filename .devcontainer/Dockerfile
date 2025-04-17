ARG VARIANT="23-bookworm"
FROM node:${VARIANT}

ARG COMPOSE_PROJECT_NAME

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin

RUN mkdir -p "/workspace/$COMPOSE_PROJECT_NAME/node_modules/.pnpm" && \
    chown -R node "/workspace/$COMPOSE_PROJECT_NAME/node_modules/.pnpm"

RUN corepack enable

USER node

RUN corepack prepare pnpm@10.4.1 --activate

RUN mkdir -p ~/.pnpm-store && \
    printf "store-dir=/home/node/.pnpm-store\nside-effects-cache=false\n" >> ~/.npmrc