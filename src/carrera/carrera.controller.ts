// src/carrera/carrera.controller.ts
import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { CarreraService } from './carrera.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('carreras')
@UseGuards(JwtAuthGuard)
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
