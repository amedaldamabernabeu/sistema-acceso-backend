// src/carrera/carrera.service.ts
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient as PrismaCarreraClient } from '../../prisma/generated/carrera';

@Injectable()
export class CarreraService
  extends PrismaCarreraClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  async getCarreras() {
    return this.carrera.findMany();
  }

  async getCarreraById(id: bigint) {
    return this.carrera.findUnique({
      where: { id },
    });
  }
}
