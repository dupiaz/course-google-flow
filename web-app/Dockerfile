# --- Stage 1: Dependencies ---
FROM node:20-alpine AS deps
WORKDIR /app
COPY web-app/package.json web-app/package-lock.json ./
RUN npm ci

# --- Stage 2: Build ---
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY web-app/ .
# Copy course content from project root
COPY module-01-nen-tang/ /content/module-01-nen-tang/
COPY module-02-prompt-mastery/ /content/module-02-prompt-mastery/
COPY module-03-quy-trinh-san-xuat/ /content/module-03-quy-trinh-san-xuat/
COPY module-04-toi-uu-thuat-toan/ /content/module-04-toi-uu-thuat-toan/
COPY module-05-xay-dung-kenh/ /content/module-05-xay-dung-kenh/
COPY module-06-scale-automation/ /content/module-06-scale-automation/
COPY resources/ /content/resources/

ENV CONTENT_DIR=/content
ENV DOCKER_BUILD=1
RUN npm run build

# --- Stage 3: Production ---
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV CONTENT_DIR=/content

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /content /content

USER nextjs
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
