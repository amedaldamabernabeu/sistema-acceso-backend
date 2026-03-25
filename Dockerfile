# Etapa 1: Construcción
FROM node:18-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Generar cliente de Prisma para linux-musl
RUN npx prisma generate

# Compilar proyecto (NestJS o Node)
RUN npm run build


# Etapa 2: Producción
FROM node:18-alpine
WORKDIR /app

COPY package*.json ./
RUN npm install --only=production

# Copiar archivos compilados
COPY --from=builder /app/dist ./dist

# Copiar prisma client generado
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/node_modules/@prisma ./node_modules/@prisma
COPY --from=builder /app/prisma ./prisma

EXPOSE 3000

# Ejecutar migraciones y arrancar app
CMD ["sh", "-c", "npx prisma migrate deploy && node dist/main.js"]