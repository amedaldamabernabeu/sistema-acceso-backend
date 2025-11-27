import { Injectable, NotFoundException } from '@nestjs/common';
import { LocalService } from '../local/local.service';

@Injectable()
export class AccessModeService {
  constructor(private readonly localService: LocalService) {}
  

  async getAll() {
    return this.localService.accessMode.findMany({
      orderBy: { id: 'asc' },
    });
  }

  async getById(id: number) {
    const mode = await this.localService.accessMode.findUnique({ where: { id } });
    if (!mode) throw new NotFoundException('Modo de acceso no encontrado');
    return mode;
  }

  async create(data: { name: string }) {
    return this.localService.accessMode.create({ data });
  }

  async update(id: number, data: { name?: string }) {
    await this.getById(id);
    return this.localService.accessMode.update({
      where: { id },
      data,
    });
  }

  async delete(id: number) {
    await this.getById(id);
    return this.localService.accessMode.delete({ where: { id } });
  }
}
