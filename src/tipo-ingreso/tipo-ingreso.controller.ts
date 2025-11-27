import { Controller, Post, Body, Get, Param, Patch, Delete, ParseIntPipe, UseGuards } from '@nestjs/common';
import { TipoIngresoService } from './tipo-ingreso.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard'; // si quieres protegerlo

@Controller('tipo-ingreso')
export class TipoIngresoController {
  constructor(private readonly svc: TipoIngresoService) {}

  @Post()
  @UseGuards(JwtAuthGuard) // opcional: protege rutas (quítalo si no quieres)
  create(@Body() body: { nombre: string }) {
    return this.svc.create(body);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.svc.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.svc.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id', ParseIntPipe) id: number, @Body() body: { nombre?: string }) {
    return this.svc.update(id, body);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.svc.remove(id);
  }
}
