# Multi-stage build for SvelteKit app with Node.js adapter

# Build stage
FROM oven/bun:1.1.38 AS builder

WORKDIR /app

# Copy package files
COPY package.json bun.lock ./
COPY prisma ./prisma

# Install dependencies
RUN bun install --frozen-lockfile

# Copy source code
COPY . .

# Generate Prisma client
RUN bun run prisma:generate

# Build the application
RUN bun run build

# Production stage
FROM node:24-alpine AS runner

WORKDIR /app

# Copy built application and dependencies
COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma

# Install only production dependencies
# Copy node_modules from builder
COPY --from=builder /app/node_modules ./node_modules

# Expose the port
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Start the application
CMD ["node", "build"]
