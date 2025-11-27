import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Patch,
  Delete,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { DispositivosAccesoService } from './dispositivos-acceso.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard'; // si quieres protegerlo



@Controller('dispositivos-acceso')
@UseGuards(JwtAuthGuard) // opcional: protege rutas (quítalo si no quieres)
export class DispositivosAccesoController {
  constructor(
    private readonly dispositivosAccesoService: DispositivosAccesoService,
  ) {}

  @Post()
  crear(@Body() data: { nombre: string; tipoIngresoId: number }) {
    return this.dispositivosAccesoService.crear(data);
  }

  @Get()
  listar() {
    return this.dispositivosAccesoService.listar();
  }

  @Get(':id')
  obtener(@Param('id', ParseIntPipe) id: number) {
    return this.dispositivosAccesoService.obtener(id);
  }

  @Patch(':id')
  actualizar(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: any,
  ) {
    return this.dispositivosAccesoService.actualizar(id, data);
  }

  @Delete(':id')
  eliminar(@Param('id', ParseIntPipe) id: number) {
    return this.dispositivosAccesoService.eliminar(id);
  }
}
