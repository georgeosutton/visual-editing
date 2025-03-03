ARG VARIANT="23-bookworm"
FROM node:${VARIANT}

ARG COMPOSE_PROJECT_NAME

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin

RUN mkdir -p "/workspace/$COMPOSE_PROJECT_NAME/node_modules/.pnpm" && \
    chown -R node "/workspace/$COMPOSE_PROJECT_NAME/node_modules/.pnpm"

USER node

RUN mkdir -p ~/.pnpm-store && \
    npm install pnpm@10.4.1 -g && \
    printf "store-dir=/home/node/.pnpm-store\nside-effects-cache=false\n" >> ~/.npmrc