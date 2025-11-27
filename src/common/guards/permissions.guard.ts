import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PERMISSIONS_KEY } from '../decorators/permissions.decorator';
import { PrismaClient as PrismaLocal } from '../../../generated/prisma';

@Injectable()
export class PermissionsGuard implements CanActivate {
  private prisma = new PrismaLocal();
  constructor(private reflector: Reflector){}

  async canActivate(context: ExecutionContext) {
    const required = this.reflector.getAllAndOverride<string[]>(PERMISSIONS_KEY, [context.getHandler(), context.getClass()]);
    if (!required || required.length===0) return true;

    const req = context.switchToHttp().getRequest();
    const user = req.user;
    if (!user) return false;

    const u = await this.prisma.user.findUnique({
      where: { id: user.userId ?? user.id },
      include: { roles: { include: { role: { include: { permissions: { include: { permission:true } } } } } } }
    });

    const userPerms = new Set<string>();
    if (!u) {
       throw new Error('Role not found');
    }
    console.log(u.name);
    u.roles.forEach(ur => ur.role.permissions.forEach(rp => userPerms.add(rp.permission.name)));
    return required.every(r => userPerms.has(r));
  }
}
