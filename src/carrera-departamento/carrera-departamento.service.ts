import { Injectable } from '@nestjs/common';
import { LocalService } from '../local/local.service';
import { AcademicoService } from '../academico/academico.service';
import { CarreraService } from '../carrera/carrera.service';

@Injectable()
export class CarreraDepartamentoService {
  constructor(
    private localService: LocalService,
    private academicoService: AcademicoService,
    private carreraService: CarreraService,
  ) {}

  // Obtener todas las asociaciones
  async getAll() {
    const relaciones = await this.localService.findAll('carreraDepartamento');

    const departamentos = await this.academicoService.getDepartamentos();
    const carreras = await this.carreraService.getCarreras();

    return relaciones.map((rel) => ({
      id: rel.id,
      departamento: departamentos.find((d) => d.clave_depto === rel.departamentoId),
      carrera: carreras.find((c) => c.id === rel.carreraId),
    }));
  }

  // Crear una nueva asociación
  async create(departamentoId: number, carreraId: number) {
    return this.localService.create('carreraDepartamento', {
      departamentoId,
      carreraId,
    });
  }

  // Eliminar una asociación
  async delete(id: number) {
    return this.localService.delete('carreraDepartamento', id);
  }
}