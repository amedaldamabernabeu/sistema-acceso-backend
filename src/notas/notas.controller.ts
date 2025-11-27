import { Controller, Get, Post, Patch, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { NotasService } from './notas.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('notas')
@UseGuards(JwtAuthGuard)
@UseGuards(JwtAuthGuard)
export class NotasController {
  constructor(private notasService: NotasService) {}
   
  @Post()
  async crearNota(@Body() body: any) {
     const { registroAccesoId, eventoId, asunto } = body;

   return this.notasService.crearNota({
    registroAccesoId: Number(registroAccesoId),
    eventoId: Number(eventoId),
    asunto,
   });
  }
  
  @Get('registro/:id')
  obtenerNotasPorRegistro(@Param('id') id: string) {
    return this.notasService.obtenerNotasPorRegistro(Number(id));
  }
  
  @Get()
  async obtenerTodas() {
     return this.notasService.obtenerTodasLasNotas();
  }
   
  @Patch(':id')
  actualizarNota(@Param('id') id: string, @Body() body: any) {
    return this.notasService.actualizarNota(Number(id), body);
  }
  
  @Delete(':id')
  eliminarNota(@Param('id') id: string) {
    return this.notasService.eliminarNota(Number(id));
  }
}
