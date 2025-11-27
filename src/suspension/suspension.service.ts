import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { LocalService } from '../local/local.service';
import { ExternalDbService } from '../external/external-db.service';

@Injectable()
export class SuspensionService {
  constructor(
    private readonly localService: LocalService,
    private readonly externalDbService: ExternalDbService,
  ) {}

  // 🔹 Crear una suspensión
  async create(data: {
    codigo: string;
    motivo: string;
    fechaInicio: Date;
    fechaFin: Date;
  }) {
    if (new Date(data.fechaInicio) > new Date(data.fechaFin)) {
      throw new BadRequestException('La fecha de inicio no puede ser mayor que la fecha de fin.');
    }

    return this.localService.suspension.create({
      data: {
        codigo: data.codigo,
        motivo: data.motivo,
        fechaInicio: new Date(data.fechaInicio).toISOString(),
        fechaFin: new Date(data.fechaFin).toISOString(),
      },
    });
  }

  // 🔹 Listar suspensiones
  async findAll() {
    return this.localService.suspension.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  // 🔹 Buscar una suspensión
  async findOne(id: number) {
    const suspension = await this.localService.suspension.findUnique({ where: { id } });
    if (!suspension) throw new NotFoundException('Suspensión no encontrada');
    return suspension;
  }

  // 🔹 Actualizar una suspensión
  async update(id: number, data: Partial<{ motivo: string; fechaInicio: Date; fechaFin: Date; activa: boolean }>) {
    const suspension = await this.findOne(id);

    return this.localService.suspension.update({
      where: { id: suspension.id },
      data,
    });
  }

  // 🔹 Eliminar una suspensión
  async remove(id: number) {
    const suspension = await this.findOne(id);
    return this.localService.suspension.delete({ where: { id: suspension.id } });
  }

  // 🔹 Buscar usuarios externos por nombre (para el front)
  async buscarUsuario(nombre: string) {
    // Buscar por nombre en ambas BD externas
    const [sica, nombreDb] = await Promise.all([
      this.externalDbService.buscarPorNombre('SICA', nombre),
      this.externalDbService.buscarPorNombre('NOMBRE', nombre),
    ]);

    return [...sica, ...nombreDb];
  }

  // 🔹 Validar si un usuario está suspendido (para RegistroAcceso)
  async verificarSuspensionActiva(codigo: string) {
    const ahora = new Date();
    const suspension = await this.localService.suspension.findFirst({
      where: {
        codigo,
        activa: true,
        fechaInicio: { lte: ahora },
        fechaFin: { gte: ahora },
      },
    });

    return suspension ? true : false;
  }
}
