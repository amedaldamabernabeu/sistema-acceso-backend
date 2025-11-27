import { Injectable } from '@nestjs/common';
import { PrismaClient as SicaClient } from '../../generated/sica';
import { PrismaClient as NombreClient } from '../../generated/nombre';

@Injectable()
export class ExternalDbService {
  private sica = new SicaClient();
  private nombre = new NombreClient();

  // 🔹 Buscar por código, usuario o RFID (ya existente)
  async buscarPorIdentificador(tipo: 'codigo' | 'usuario' | 'rfid', valor: string) {
    const numericValue = Number(valor);
    const stringValue = String(valor);

    // 🔍 Buscar en SICA
    if (tipo === 'usuario' || tipo === 'rfid') {
      const user = await this.sica.usuarios.findFirst({
        where: {
          [tipo === 'usuario' ? 'usuario' : 'rfid']:
            tipo === 'usuario' ? numericValue : stringValue,
        },
      });
      if (user) return { ...user, origen: 'SICA' };
    }

    // 🔍 Buscar en NOMBRE
    if (tipo === 'codigo' || tipo === 'rfid') {
      const alumno = await this.nombre.alumno.findFirst({
        where: {
          [tipo === 'codigo' ? 'codigo' : 'rfid']: stringValue,
        },
      });
      if (alumno) return { ...alumno, origen: 'NOMBRE' };
    }

    return null;
  }

  // 🔹 NUEVO: Buscar usuarios por nombre o coincidencia parcial
  async buscarPorNombre(origen: 'SICA' | 'NOMBRE', nombre: string) {
    const nombreBuscado = nombre.trim();

    if (origen === 'SICA') {
      // Buscar por coincidencia parcial en SICA (tabla usuarios)
      return await this.sica.usuarios.findMany({
        where: {
          nombre: { contains: nombreBuscado },
        },
        select: {
          usuario: true,
          nombre: true,
          rfid: true,
        },
      });
    }

    if (origen === 'NOMBRE') {
      // Buscar por coincidencia parcial en NOMBRE (tabla alumno)
      const alumnos = await this.nombre.alumno.findMany({
        where: {
          OR: [
            { nombre: { contains: nombreBuscado } },
            { ap: { contains: nombreBuscado } },
            { am: { contains: nombreBuscado } },
          ],
        },
        select: {
          codigo: true,
          nombre: true,
          ap: true,
          am: true,
          rfid: true,
        },
      });

      // Unir nombre completo
      return alumnos.map((a) => ({
        codigo: a.codigo,
        nombre: `${a.nombre} ${a.ap ?? ''} ${a.am ?? ''}`.trim(),
        rfid: a.rfid,
      }));
    }

    return [];
  }
}
