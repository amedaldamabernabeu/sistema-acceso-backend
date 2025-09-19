import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: 'http://localhost:3001' }); // o app.enableCors() mientras desarrollas
  // Solución global: convierte todos los BigInt a string automáticamente
  (BigInt.prototype as any).toJSON = function () {
    return this.toString();
  };

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
