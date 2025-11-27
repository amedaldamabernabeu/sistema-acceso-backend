// src/academico/academico.controller.ts
import { Controller, Get, UseGuards} from '@nestjs/common';
import { AcademicoService } from './academico.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('academico')
@UseGuards(JwtAuthGuard)
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

