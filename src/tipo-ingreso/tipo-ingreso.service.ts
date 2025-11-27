import { Injectable, NotFoundException } from '@nestjs/common';
import { LocalService } from '../local/local.service';

@Injectable()
export class TipoIngresoService {
  constructor(private readonly local: LocalService) {}

  async create(data: { nombre: string }) {
    return this.local.tipoIngresoDispositivo.create({
      data: { nombre: data.nombre },
    });
  }

  async findAll() {
    return this.local.tipoIngresoDispositivo.findMany({
      orderBy: { id: 'asc' },
    });
  }

  async findOne(id: number) {
    const t = await this.local.tipoIngresoDispositivo.findUnique({ where: { id } });
    if (!t) throw new NotFoundException('Tipo de ingreso no encontrado');
    return t;
  }

  async update(id: number, data: { nombre?: string }) {
    // Will throw if id not exists
    return this.local.tipoIngresoDispositivo.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.local.tipoIngresoDispositivo.delete({ where: { id } });
  }
}
