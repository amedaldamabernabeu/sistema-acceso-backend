// src/carrera/carrera.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { CarreraService } from './carrera.service';

@Controller('carreras')
export class CarreraController {
  constructor(private readonly carreraService: CarreraService) {}

  @Get()
  getAll() {
    return this.carreraService.getCarreras();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.carreraService.getCarreraById(BigInt(id));
  }
  
}
