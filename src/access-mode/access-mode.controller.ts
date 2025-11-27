import { Controller, Get, Post, Patch, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { AccessModeService } from './access-mode.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('access-modes')
@UseGuards(JwtAuthGuard)
export class AccessModeController {
  constructor(private readonly accessModeService: AccessModeService) {}

  @Get()
  getAll() {
    return this.accessModeService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.accessModeService.getById(Number(id));
  }

  @Post()
  create(@Body() body: { name: string }) {
    return this.accessModeService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: { name?: string }) {
    return this.accessModeService.update(Number(id), body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.accessModeService.delete(Number(id));
  }
  
}

