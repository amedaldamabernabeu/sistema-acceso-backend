import { Module } from '@nestjs/common';
import { CarreraDepartamentoService } from './carrera-departamento.service';
import { CarreraDepartamentoController } from './carrera-departamento.controller';
import { LocalModule } from '../local/local.module';
import { AcademicoService } from '../academico/academico.service';
import { CarreraService } from '../carrera/carrera.service';

@Module({
  imports: [LocalModule],
  providers: [CarreraDepartamentoService, AcademicoService, CarreraService],
  controllers: [CarreraDepartamentoController],
})
export class CarreraDepartamentoModule {}