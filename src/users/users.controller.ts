import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private svc: UsersService) {}

  
  @Get('me')
  getMe(@Req() req) {
    return req.user; // ← Aquí Nest te envía el usuario del token JWT
  }
  
  
  @Get()
  findAll() {
    return this.svc.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.svc.findOne(Number(id));
  }

  @Post()
  create(@Body() body: { email: string; password: string; name?: string }) {
    return this.svc.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.svc.update(Number(id), body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.svc.delete(Number(id));
  }

  @Post(':id/roles')
  assignRole(@Param('id') id: string, @Body() b: { roleId: number }) {
    return this.svc.assignRole(Number(id), b.roleId);
  }

  @Delete(':id/roles/:roleId')
  removeRole(@Param('id') id: string, @Param('roleId') roleId: string) {
    return this.svc.removeRole(Number(id), Number(roleId));
  }
}
