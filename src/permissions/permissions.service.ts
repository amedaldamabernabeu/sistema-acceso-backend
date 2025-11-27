import { Injectable } from '@nestjs/common';
import { LocalService } from '../local/local.service';

@Injectable()
export class PermissionsService {
  constructor(private readonly localService: LocalService) {}

  async createPermission(data: { name: string; description?: string }) {
    return this.localService.create('permission', data);
  }

  async getPermissions() {
    return this.localService.findAll('permission');
  }

  async getPermissionById(id: number) {
    return this.localService.findAll('permission').then(perms => perms.find(p => p.id === id));
  }

  async updatePermission(id: number, data: { name?: string; description?: string }) {
    return this.localService.update('permission', id, data);
  }

  async deletePermission(id: number) {
    return this.localService.delete('permission', id);
  }
}
