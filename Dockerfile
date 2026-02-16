# Multi-stage build for SvelteKit app with Node.js adapter

# Build stage
FROM oven/bun:1.1.38 AS builder

# Install Node.js + Prisma CLI for Docker compatibility
RUN apt-get update && apt-get install -y curl \
  && curl -L https://raw.githubusercontent.com/tj/n/master/bin/n -o n \
  && bash n 20 \
  && rm n \
  && npm install -g prisma@latest \
  && apt-get clean && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy package files
COPY package.json bun.lockb* ./
COPY prisma ./prisma

# Install dependencies with Bun
RUN bun install --frozen-lockfile

# Copy source code
COPY . .

# Generate Prisma client (works with Bun)
RUN bunx --bun prisma generate

# Database push happens at runtime in CMD (see bottom of file)

# Build the application
RUN bun run build

# Production stage
FROM node:24-alpine AS runner

WORKDIR /app

# Copy built application
COPY --from=builder /app/build ./build
COPY --from=builder /app/package*.json ./

# Install production deps with npm (ensures Prisma client works)
RUN npm ci --only=production --no-optional && npm cache clean --force

# Copy Prisma client files
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
RUN npx prisma generate --no-engine  # Regenerate client for prod

# Expose the port
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Healthcheck + start (add migration here if needed)
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/health', (r) => process.exit(r.statusCode===200?0:1))"

CMD sh -c "npx prisma db push --accept-data-loss && node build"
