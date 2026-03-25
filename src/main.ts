import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// 🚀 SOLUCIÓN GLOBAL: Convertir BigInt a string.
// Esto DEBE estar fuera de 'bootstrap()' para asegurar que se aplique 
// antes de que el servidor lo necesite.
(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Habilitar CORS para tu frontend
  app.enableCors({ origin: 'http://localhost:3001' });

  // 👂 INICIAR EL SERVIDOR (Esta línea estaba comentada o faltante)
  await app.listen(3000, '0.0.0.0');
  
  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();