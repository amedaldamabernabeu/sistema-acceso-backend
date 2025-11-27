// src/academico/academico.service.ts
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient as PrismaAcademicoClient } from '../../generated/academico';

@Injectable()
export class AcademicoService
  extends PrismaAcademicoClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  async getDivisiones() {
    return this.division.findMany();
  }

  async getDepartamentos() {
    return this.departamento.findMany();
  }
}

