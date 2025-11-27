import { Injectable, BadRequestException } from '@nestjs/common';
import { LocalService } from 'src/local/local.service';
import { randomBytes } from 'crypto';

@Injectable()
export class DispositivosAccesoService {
  constructor(private readonly localService: LocalService) {}

  // Crear token seguro
  generarToken() {
    return randomBytes(32).toString('hex');
  }

  async crear(data: { nombre: string; tipoIngresoId: number }) {
    const token = this.generarToken();

    return this.localService.dispositivoAcceso.create({
      data: {
        nombre: data.nombre,
        tipoIngresoId: data.tipoIngresoId,
        tokenAcceso: token,
      },
    });
  }

  async listar() {
    return this.localService.dispositivoAcceso.findMany({
      include: { tipoIngreso: true },
      orderBy: { id: 'desc' },
    });
  }

  async obtener(id: number) {
    return this.localService.dispositivoAcceso.findUnique({
      where: { id },
      include: { tipoIngreso: true },
    });
  }

  async actualizar(id: number, data: any) {
    return this.localService.dispositivoAcceso.update({
      where: { id },
      data,
    });
  }

  async eliminar(id: number) {
    return this.localService.dispositivoAcceso.delete({
      where: { id },
    });
  }

  /// Validación usada por ApiKeyGuard
  async validarToken(token: string) {
    const dispositivo = await this.localService.dispositivoAcceso.findUnique({
      where: { tokenAcceso: token },
    });

    if (!dispositivo || !dispositivo.activo) {
      throw new BadRequestException('Token inválido o dispositivo inactivo');
    }

    return dispositivo;
  }
}
