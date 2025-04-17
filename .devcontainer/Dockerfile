ARG VARIANT="23-bookworm"
FROM node:${VARIANT}

ARG COMPOSE_PROJECT_NAME

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin

ARG USERNAME=node

RUN mkdir -p /workspace/${COMPOSE_PROJECT_NAME}

RUN apt-get update \
    && apt-get install -y sudo \
    && echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

RUN corepack enable

USER node
WORKDIR /workspace/${COMPOSE_PROJECT_NAME}

RUN corepack prepare pnpm@10.4.1 --activate

RUN mkdir -p ~/.pnpm-store && \
    printf "store-dir=/home/node/.pnpm-store\nside-effects-cache=false\n" >> ~/.npmrc