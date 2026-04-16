# Etapa 1: Construcción
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Clientes Prisma: principal (PostgreSQL) + BDs externas (MySQL). Sin esto, en runtime falla require('../../generated/academico').
RUN npx prisma generate --schema=prisma/schema.prisma && \
    npx prisma generate --schema=prisma/schema.academico.prisma && \
    npx prisma generate --schema=prisma/schema.carrera.prisma && \
    npx prisma generate --schema=prisma/schema.sica.prisma && \
    npx prisma generate --schema=prisma/schema.nombre.prisma

RUN npm run build


# Etapa 2: Producción
FROM node:20-alpine
WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

COPY --from=builder /app/dist ./dist

# Cliente Prisma del schema principal (node_modules)
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/node_modules/@prisma ./node_modules/@prisma

# Salidas generate hacia generated/* (academico, carrera, sica, nombre, prisma)
COPY --from=builder /app/generated ./generated

COPY --from=builder /app/prisma ./prisma

EXPOSE 3000

CMD ["sh", "-c", "npx prisma migrate deploy && node dist/main.js"]
