# Multi-stage build for SvelteKit app with Bun

# Build stage
FROM oven/bun:1.1.38 AS builder

WORKDIR /app

# Copy package files
COPY package.json bun.lockb* ./
COPY prisma ./prisma

# Install dependencies with Bun
RUN bun install --frozen-lockfile

# Copy source code
COPY . .

# Generate Prisma client
RUN bunx --bun prisma generate

# Build the application with Bun
RUN bun run build

# Production stage - use Bun for runtime as well
FROM oven/bun:1.1.38-alpine AS runner

WORKDIR /app

# Copy built application and dependencies from builder
COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/prisma ./prisma

# Expose the port
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Run prisma db push to initialize MongoDB, then start the app with bun
CMD sh -c "bunx prisma db push --accept-data-loss && bun run start"
