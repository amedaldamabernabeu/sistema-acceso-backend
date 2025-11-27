import { Controller, Post, Get, Param, Delete, Body, UseGuards, Put } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesService } from './roles.service';

@Controller('roles')
@UseGuards(JwtAuthGuard)
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  create(@Body() body: { name: string; description?: string }) {
    return this.rolesService.createRole(body);
  }

  @Get()
  findAll() {
    return this.rolesService.getRoles();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.rolesService.getRoleById(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: { name?: string; description?: string }) {
    return this.rolesService.updateRole(Number(id), body);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.rolesService.deleteRole(Number(id));
  }

  // Asignar permiso al rol
  @Post(':id/permissions')
  //@UseGuards(JwtAuthGuard) // si quieres protegerlo
  async assignPermission(
    @Param('id') id: string,
    @Body() body: { permissionId: number },
  ) {
    return this.rolesService.assignPermission(Number(id), body.permissionId);
  }

  //Eliminar un permiso de un rol
  @Delete(':id/permissions/:permissionId')
  async removePermission(
    @Param('id') id: string,
    @Param('permissionId') permissionId: string,
  ) {
     return this.rolesService.removePermission(Number(id), Number(permissionId));
  }
  
}
