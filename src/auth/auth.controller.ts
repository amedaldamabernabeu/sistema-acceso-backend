import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private svc: AuthService) {}

  @Post('register')
  register(@Body() dto: { email:string; password:string; name?:string }) {
    return this.svc.register(dto);
  }

  @Post('login')
  async login(@Body() dto: { email:string; password:string }) {
    const user = await this.svc.validateUser(dto.email, dto.password);
    if (!user) throw new UnauthorizedException('Credenciales inválidas');
    return this.svc.login(user);
  }
}

