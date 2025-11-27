import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  BadRequestException,
  UseGuards,
  Query,
} from '@nestjs/common';
import { SuspensionService } from './suspension.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('suspension')
@UseGuards(JwtAuthGuard)
export class SuspensionController {
  constructor(private readonly suspensionService: SuspensionService) {}

  
  @Get('usuarios')
  buscarUsuario(@Query('nombre') nombre: string) {
     return this.suspensionService.buscarUsuario(nombre);
  }

  @Post()
  async create(@Body() body: any) {
    const { codigo, motivo, fechaInicio, fechaFin } = body;
    if (!codigo || !motivo || !fechaInicio || !fechaFin) {
      throw new BadRequestException('Todos los campos son requeridos.');
    }

    return await this.suspensionService.create({
      codigo,
      motivo,
      fechaInicio,
      fechaFin,
    });
  }

  
  @Get()
  async findAll() {
    return await this.suspensionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const suspensionId = parseInt(id, 10);
    if (isNaN(suspensionId)) throw new BadRequestException('ID inválido');
    return await this.suspensionService.findOne(suspensionId);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() body: any) {
    const suspensionId = parseInt(id, 10);
    if (isNaN(suspensionId)) throw new BadRequestException('ID inválido');
    return await this.suspensionService.update(suspensionId, body);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const suspensionId = parseInt(id, 10);
    if (isNaN(suspensionId)) throw new BadRequestException('ID inválido');
    return await this.suspensionService.remove(suspensionId);
  }

  
}
