import { Injectable, NotFoundException } from '@nestjs/common';
import { LocalService } from '../local/local.service';

@Injectable()
export class EventosService {
  constructor(private localService: LocalService) {}

  crearEvento(body: any) {
    return this.localService.evento.create({
      data: {
        nombre: body.nombre,
        fechaHora: body.fechaHora ? new Date(body.fechaHora) : new Date(),
        ubicacion: body.ubicacion ?? null,
      },
    });
  }

  obtenerEventos() {
    return this.localService.evento.findMany({
      include: { notas: true },
    });
  }

  async actualizarEvento(id: number, body: any) {
    const existe = await this.localService.evento.findUnique({ where: { id } });
    if (!existe) throw new NotFoundException('Evento no encontrado');

    return this.localService.evento.update({
      where: { id },
      data: {
        nombre: body.nombre,
        fechaHora: body.fechaHora ? new Date(body.fechaHora) : existe.fechaHora,
        ubicacion: body.ubicacion ?? existe.ubicacion,
      },
    });
  }

  eliminarEvento(id: number) {
    return this.localService.evento.delete({ where: { id } });
  }
}

