# Production image, copy all the files and run next
FROM node:21-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
# Uncomment the following line in case you want to disable telemetry during runtime.
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Install and setup dependencies for healthcheck.
RUN apk add --no-cache \
    curl \
    libcap && \
    setcap "cap_net_bind_service=+ep" /usr/local/bin/node

# You only need to copy next.config.js if you are NOT using the default configuration
COPY ./next.config.js ./apps/next/
COPY ./public ./apps/next/public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --chown=nextjs:nodejs ./.next/standalone ./
COPY --chown=nextjs:nodejs ./.next/static ./apps/next/.next/static

USER nextjs

EXPOSE 80

ENV HOSTNAME 0.0.0.0
ENV PORT 80

WORKDIR /app/apps/next

CMD ["node", "server.js"]