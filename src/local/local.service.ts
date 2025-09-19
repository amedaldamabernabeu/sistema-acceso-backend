// src/local/local.service.ts
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient as PrismaLocalClient } from '../../generated/prisma';

@Injectable()
export class LocalService
  extends PrismaLocalClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  // Métodos genéricos para tablas locales

  // Crear un registro en cualquier tabla (genérico)
  async create(table: string, data: any) {
    return this[table].create({ data });
  }

  // Listar registros
  async findAll(table: string) {
    return this[table].findMany();
  }

  // Eliminar registro
  async delete(table: string, id: number) {
    return this[table].delete({ where: { id } });
  }

  
}
