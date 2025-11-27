import { Controller, Get, Post, Body, Param, Delete, UseGuards } from '@nestjs/common';
import { CarreraDepartamentoService } from './carrera-departamento.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('carrera-departamento')
@UseGuards(JwtAuthGuard)
export class CarreraDepartamentoController {
  constructor(private readonly service: CarreraDepartamentoService) {}

  @Get()
  getAll() {
    return this.service.getAll();
  }

  @Post()
  create(@Body() body: { departamentoId: number; carreraId: number }) {
    return this.service.create(body.departamentoId, body.carreraId);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.service.delete(Number(id));
  }
}