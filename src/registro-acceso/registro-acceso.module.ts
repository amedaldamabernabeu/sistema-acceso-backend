import { Module } from '@nestjs/common';
import { RegistroAccesoService } from './registro-acceso.service';
import { RegistroAccesoController } from './registro-acceso.controller';
import { ExternalDbService } from '../external/external-db.service';
import { LocalService } from '../local/local.service';
import { DispositivosAccesoModule } from '../dispositivos-acceso/dispositivos-acceso.module';


@Module({
  imports: [DispositivosAccesoModule],
  controllers: [RegistroAccesoController],
  providers: [RegistroAccesoService, ExternalDbService, LocalService],
})
export class RegistroAccesoModule {}