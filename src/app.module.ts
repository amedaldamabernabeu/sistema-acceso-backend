import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AcademicoModule } from './academico/academico.module';
import { CarreraModule } from './carrera/carrera.module';
import { CarreraDepartamentoModule } from './carrera-departamento/carrera-departamento.module';
import { LocalModule } from './local/local.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { PermissionsModule } from './permissions/permissions.module';
import { AccessModeModule } from './access-mode/access-mode.module';
import { RegistroAccesoModule } from './registro-acceso/registro-acceso.module';
import { SuspensionModule } from './suspension/suspension.module';
import { NotasModule } from './notas/notas.module';
import { EventosModule } from './eventos/eventos.module';
import { TipoIngresoModule } from './tipo-ingreso/tipo-ingreso.module';
import { DispositivosAccesoModule } from './dispositivos-acceso/dispositivos-acceso.module';
import { ApiKeyGuard } from './common/guards/api-key.guard';

@Module({
  imports: [
    // ConfigModule cargar .env y exponer ConfigService globalmente
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    AcademicoModule,
    CarreraModule,
    CarreraDepartamentoModule,
    LocalModule,
    AuthModule,
    UsersModule,
    RolesModule,
    PermissionsModule,
    AccessModeModule,
    RegistroAccesoModule,
    SuspensionModule,
    NotasModule,
    EventosModule,
    TipoIngresoModule,
    DispositivosAccesoModule,
  ],
  controllers: [AppController],
  providers: [AppService, ApiKeyGuard],
})
export class AppModule {}