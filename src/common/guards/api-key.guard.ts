// src/common/guards/api-key.guard.ts
/*import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const apiKey = request.headers['authorization']?.replace('Bearer ', '');
    const validKey = process.env.ACCESS_HARDWARE_KEY;

    if (!apiKey || apiKey !== validKey) {
      throw new UnauthorizedException('Clave API inválida o ausente');
    }

    return true;
  }
}*/

import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { DispositivosAccesoService } from '../../dispositivos-acceso/dispositivos-acceso.service';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  constructor(private dispositivosService: DispositivosAccesoService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers['authorization']?.replace('Bearer ', '');

    if (!token) {
      throw new UnauthorizedException('Token no proporcionado');
    }

    await this.dispositivosService.validarToken(token);

    return true;
  }
}

