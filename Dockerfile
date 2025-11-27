# Etapa 1: Construcción
FROM node:18-alpine as builder
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npx prisma generate       # genera clientes para linux-musl dentro del contenedor
RUN npm run build

# Etapa 2: Producción
FROM node:18-alpine
WORKDIR /app

COPY package*.json ./
RUN npm install --only=production

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/generated ./generated  # copia la carpeta generada desde el builder

EXPOSE 3000
CMD ["node", "dist/main.js"]
