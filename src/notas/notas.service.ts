import { Injectable, NotFoundException,BadRequestException } from '@nestjs/common';
import { LocalService } from '../local/local.service';

@Injectable()
export class NotasService {
  constructor(private localService: LocalService) {}

  async crearNota(data: {
    registroAccesoId: number;
    eventoId: number;
    asunto: string;
  }) {

    // 1. Validar registro de acceso
    const registro = await this.localService.registroAcceso.findUnique({
      where: { id: data.registroAccesoId },
    });

    if (!registro) {
      throw new BadRequestException('El registro de acceso no existe');
    }

    // 2. Validar evento
    const evento = await this.localService.evento.findUnique({
      where: { id: data.eventoId },
    });

    if (!evento) {
      throw new BadRequestException('El evento no existe');
    }

    // 3. Crear la nota
    return await this.localService.nota.create({
      data: {
        asunto: data.asunto,
        registroAccesoId: data.registroAccesoId,
        eventoId: data.eventoId,
      },
    });
  }


  obtenerNotasPorRegistro(registroAccesoId: number) {
    return this.localService.nota.findMany({
      where: { registroAccesoId },
      include: { evento: true },
    });
  }

  obtenerTodasLasNotas() {
  return this.localService.nota.findMany({
    include: {
      evento: true,
      registroAcceso: true,
    },
    orderBy: { id: 'desc' },
   });
  }

    

  async actualizarNota(id: number, body: any) {
    const existe = await this.localService.nota.findUnique({ where: { id } });
    if (!existe) throw new NotFoundException('Nota no encontrada');

    return this.localService.nota.update({
      where: { id },
      data: {
        asunto: body.asunto,
        eventoId: body.eventoId ? Number(body.eventoId) : null,
      },
    });
  }

  eliminarNota(id: number) {
    return this.localService.nota.delete({ where: { id } });
  }
}
