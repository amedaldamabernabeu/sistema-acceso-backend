import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AcademicoModule } from './academico/academico.module';
import { CarreraModule } from './carrera/carrera.module';
import { CarreraDepartamentoModule } from './carrera-departamento/carrera-departamento.module';
import { LocalModule } from './local/local.module';

@Module({
  imports: [AcademicoModule, CarreraModule, CarreraDepartamentoModule, LocalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
