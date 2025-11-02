# ───────────────────────────────
# Stage 1: Build
# ───────────────────────────────
FROM node:20-alpine AS build

# Install pnpm globally (since alpine image is minimal)
RUN npm install -g pnpm

WORKDIR /app

# Copy dependency files
COPY pnpm-lock.yaml package.json ./

# Install deps using pnpm (faster, cached)
RUN pnpm install --frozen-lockfile

# Copy all project files
COPY . .

# Build TypeScript
RUN pnpm run build:prod

# ───────────────────────────────
# Stage 2: Runtime
# ───────────────────────────────
# Use minimal Node.js image for runtime
FROM node:20-alpine

# Install pnpm globally
RUN npm install -g pnpm
# Set working directory
WORKDIR /app

# Copy production build output
COPY --from=build /app/dist ./dist
# Copy package.json for dependency install
COPY --from=build /app/package.json .
# Copy pnpm-lock.yaml for dependency locking
COPY --from=build /app/pnpm-lock.yaml ./

# Install only production dependencies
RUN pnpm install --prod --frozen-lockfile

# Expose application port
EXPOSE 3000

# Start application
CMD ["node", "dist/index.js"]
