import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { LocalService } from '../local/local.service';

@Injectable()
export class RolesService {
  constructor(private readonly localService: LocalService) {}

  async createRole(data: { name: string; description?: string }) {
    return this.localService.create('role', data);
  }

  async getRoles() {
  // Obtener roles
  const roles = await this.localService.findAll('role');
  const rolePermissions = await this.localService.findAll('rolePermission');
  const permissions = await this.localService.findAll('permission');

  // Unir datos
  return roles.map((role) => ({
    ...role,
    permissions: rolePermissions
      .filter((rp) => rp.roleId === role.id)
      .map((rp) => ({
        ...rp,
        permission: permissions.find((p) => p.id === rp.permissionId),
      })),
  }));
}

  async getRoleById(id: number) {
  const role = (await this.localService.findAll('role')).find((r) => r.id === id);
  if (!role) return null;

  const rolePermissions = await this.localService.findAll('rolePermission');
  const permissions = await this.localService.findAll('permission');

  return {
    ...role,
    permissions: rolePermissions
      .filter((rp) => rp.roleId === id)
      .map((rp) => ({
        ...rp,
        permission: permissions.find((p) => p.id === rp.permissionId),
      })),
  };
}

  async updateRole(id: number, data: { name?: string; description?: string }) {
     return this.localService.update('role', id, data);
  }

  async deleteRole(id: number) {
    return this.localService.delete('role', id);
  }

  async assignPermission(roleId: number, permissionId: number) {
    // Validaciones
    const roles = await this.localService.findAll('role');
    const role = roles.find(r => r.id === roleId);
    if (!role) throw new NotFoundException('Role not found');

    const perms = await this.localService.findAll('permission');
    const perm = perms.find(p => p.id === permissionId);
    if (!perm) throw new NotFoundException('Permission not found');

    // Verificar si ya existe
    const existing = await this.localService.findAll('rolePermission')
      .then(list => list.find(rp => rp.roleId === roleId && rp.permissionId === permissionId));
    if (existing) throw new ConflictException('Permission already assigned to role');

    // Crear la relación
    return this.localService.create('rolePermission', { roleId, permissionId });
  }

  async removePermission(roleId: number, permissionId: number) {
     const rolePerms = await this.localService.findAll('rolePermission');
     const rel = rolePerms.find(rp => rp.roleId === roleId && rp.permissionId === permissionId);
     if (!rel) throw new NotFoundException('Permission not assigned to role');
      return this.localService.delete('rolePermission', rel.id);
  }

}

