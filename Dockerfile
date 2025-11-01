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
FROM node:20-alpine

RUN npm install -g pnpm
WORKDIR /app

COPY --from=build /app/dist ./dist
COPY --from=build /app/package.json .
COPY --from=build /app/pnpm-lock.yaml ./

# Install only production deps
RUN pnpm install --prod --frozen-lockfile

EXPOSE 3000

CMD ["node", "dist/index.js"]
