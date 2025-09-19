// src/academico/academico.controller.ts
import { Controller, Get } from '@nestjs/common';
import { AcademicoService } from './academico.service';

@Controller('academico')
export class AcademicoController {
  constructor(private readonly academicoService: AcademicoService) {}

  @Get('divisiones')
  async divisiones() {
    return this.academicoService.getDivisiones();
  }

  @Get('departamentos')
  async departamentos() {
    return this.academicoService.getDepartamentos();
  }
}

