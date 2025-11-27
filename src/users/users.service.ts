import { Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaClient as PrismaLocal } from '../../generated/prisma';


@Injectable()
export class UsersService {
  private prisma = new PrismaLocal();

  async findAll() {
    return this.prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        active: true,
        roles: {
          include: { role: true },
        },
      },
    });
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: { roles: { include: { role: true } } },
    });
    if (!user) throw new NotFoundException('Usuario no encontrado');
    return user;
  }

  async create(data: { email: string; password: string; name?: string }) {
    // En producción, esto se debería hacer en AuthService.register
    const hashedPassword = await bcrypt.hash(data.password, 10);
    return this.prisma.user.create({
      data: {
        email: data.email,
        name: data.name,
        password: hashedPassword,
        active: true,
      },
    });
  }

  async update(id: number, data: Partial<{ email: string; name: string; password: string; active: boolean }>) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new NotFoundException('Usuario no encontrado');

    const updateData = { ...data };
    if (data.password) updateData.password = await bcrypt.hash(data.password, 10);

    return this.prisma.user.update({
      where: { id },
      data: updateData,
    });
  }

  async delete(id: number) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new NotFoundException('Usuario no encontrado');

    await this.prisma.userRole.deleteMany({ where: { userId: id } }); // Limpieza de relaciones
    return this.prisma.user.delete({ where: { id } });
  }

  async assignRole(userId: number, roleId: number) {
    return this.prisma.userRole.create({ data: { userId, roleId } });
  }

  async removeRole(userId: number, roleId: number) {
    return this.prisma.userRole.deleteMany({ where: { userId, roleId } });
  }
}

