import { Module } from '@nestjs/common';
import { CarreraService } from './carrera.service';
import { CarreraController } from './carrera.controller';

@Module({
  providers: [CarreraService],
  controllers: [CarreraController]
})
export class CarreraModule {}
