import { Module } from '@nestjs/common';
import { TipoIngresoService } from './tipo-ingreso.service';
import { TipoIngresoController } from './tipo-ingreso.controller';
import { LocalModule } from '../local/local.module'; // asegurarse de exportar LocalService desde aquí
import { AuthModule } from '../auth/auth.module'; // si usas JwtAuthGuard y lo requiere

@Module({
  imports: [LocalModule, AuthModule], // AuthModule opcional si usas Jwt guard
  providers: [TipoIngresoService],
  controllers: [TipoIngresoController],
  exports: [TipoIngresoService],
})
export class TipoIngresoModule {}
