import { Controller, Get, Post, Patch, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { EventosService } from './eventos.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('eventos')
@UseGuards(JwtAuthGuard)
export class EventosController {
  constructor(private eventosService: EventosService) {}

  @Post()
  crearEvento(@Body() body: any) {
    return this.eventosService.crearEvento(body);
  }

  @Get()
  obtenerEventos() {
    return this.eventosService.obtenerEventos();
  }

  @Patch(':id')
  actualizarEvento(@Param('id') id: string, @Body() body: any) {
    return this.eventosService.actualizarEvento(Number(id), body);
  }

  @Delete(':id')
  eliminarEvento(@Param('id') id: string) {
    return this.eventosService.eliminarEvento(Number(id));
  }
}

