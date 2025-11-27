import { Module } from '@nestjs/common';
import { DispositivosAccesoService } from './dispositivos-acceso.service';
import { DispositivosAccesoController } from './dispositivos-acceso.controller';
import { LocalModule } from '../local/local.module';
import { LocalService } from 'src/local/local.service';

@Module({
  imports: [LocalModule],  
  providers: [DispositivosAccesoService, LocalService],
  controllers: [DispositivosAccesoController],
  exports: [DispositivosAccesoService]
})
export class DispositivosAccesoModule {}
