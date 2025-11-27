import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { PrismaClient as PrismaLocal } from '../../generated/prisma'; // ajusta si usas otra ruta

@Injectable()
export class AuthService {
  private prisma = new PrismaLocal();

  constructor(private jwtService: JwtService) {}

  async register(dto: { email:string; password:string; name?:string }) {
    const existing = await this.prisma.user.findUnique({ where: { email: dto.email }});
    if (existing) throw new Error('Usuario ya existe');
    const hashed = await bcrypt.hash(dto.password, 10);
    const user = await this.prisma.user.create({ data: { email: dto.email, password: hashed, name: dto.name }});
    return { id: user.id, email: user.email, name: user.name };
  }

  async validateUser(email:string, pass:string) {
    const user = await this.prisma.user.findUnique({ where: { email }});
    if (!user) return null;
    const ok = await bcrypt.compare(pass, user.password);
    if (!ok) return null;
    return { id: user.id, email: user.email, name: user.name };
  }

  async login(user: any) {
    const payload = { sub: user.id ?? user.userId, email: user.email,  name: user.name };
    return { access_token: this.jwtService.sign(payload) };
  }
}
