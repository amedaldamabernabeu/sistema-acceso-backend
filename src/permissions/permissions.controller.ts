import { Controller, Post, Get, Param, Delete, Body, Put , UseGuards} from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('permissions')
@UseGuards(JwtAuthGuard)
export class PermissionsController {
  constructor(private readonly permissionsService: PermissionsService) {}

  @Post()
  create(@Body() body: { name: string; description?: string }) {
    return this.permissionsService.createPermission(body);
  }

  @Get()
  findAll() {
    return this.permissionsService.getPermissions();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.permissionsService.getPermissionById(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: { name?: string; description?: string }) {
    return this.permissionsService.updatePermission(Number(id), body);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.permissionsService.deletePermission(Number(id));
  }
}
