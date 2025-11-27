import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  BadRequestException,
  UseGuards,
  Put,
} from '@nestjs/common';
import { RegistroAccesoService } from './registro-acceso.service';
import { ApiKeyGuard } from '../common/guards/api-key.guard';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('registro-acceso')
export class RegistroAccesoController {
  constructor(private readonly registroAccesoService: RegistroAccesoService) {}

  /**
   * 🔹 Registrar entrada o salida automáticamente
   * Si el usuario no tiene registro abierto → crea uno (entrada)
   * Si tiene uno abierto → actualiza la salida
   */
  @Post('registrar')
  @UseGuards(ApiKeyGuard)
  async registrarAcceso(@Body() body: any) {
    const { codigo, usuario, rfid, modoAccesoId } = body;

    // Validaciones básicas
    if (!codigo && !usuario && !rfid) {
      throw new BadRequestException('Debe proporcionar un código, usuario o RFID.');
    }
    if (!modoAccesoId) {
      throw new BadRequestException('Debe especificar el modo de acceso.');
    }

    return await this.registroAccesoService.registrarAcceso({
      codigo,
      usuario,
      rfid,
      modoAccesoId,
    });
  }

  /**
   * 🔹 Obtener todos los registros ordenados por fecha
   */
  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll() {
    return await this.registroAccesoService.findAll();
  }

  /**
   * 🔹 Obtener un registro específico por ID
   */
  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async findOne(@Param('id') id: string) {
    const registroId = parseInt(id, 10);
    if (isNaN(registroId)) {
      throw new BadRequestException('El ID debe ser un número válido.');
    }
    return await this.registroAccesoService.findOne(registroId);
  }

  /**
   * 🔹 Editar (actualizar) un registro existente
   */
  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id: string, @Body() body: any) {
    const registroId = parseInt(id, 10);
    if (isNaN(registroId)) {
      throw new BadRequestException('El ID debe ser un número válido.');
    }

    // Validar que haya algo que actualizar
    if (!body || Object.keys(body).length === 0) {
      throw new BadRequestException('Debe proporcionar datos para actualizar el registro.');
    }

    return await this.registroAccesoService.update(registroId, body);
  }

  /**
   * 🔹 Eliminar un registro
   */
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async remove(@Param('id') id: string) {
    const registroId = parseInt(id, 10);
    if (isNaN(registroId)) {
      throw new BadRequestException('El ID debe ser un número válido.');
    }
    return await this.registroAccesoService.remove(registroId);
  }
}
