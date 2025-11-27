import {
  Injectable,
  BadRequestException,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { LocalService } from '../local/local.service';
import { ExternalDbService } from '../external/external-db.service';

@Injectable()
export class RegistroAccesoService {
  constructor(
    private readonly localService: LocalService,
    private readonly externalDbService: ExternalDbService,
  ) {}

  async registrarAcceso(data: {
    codigo?: string;
    usuario?: string;
    rfid?: string;
    modoAccesoId: number;
  }) {
    const { codigo, usuario, rfid, modoAccesoId } = data;

    if (!codigo && !usuario && !rfid) {
      throw new BadRequestException(
        'Debe proporcionar un código, usuario o RFID.',
      );
    }

    // Determinar tipo de búsqueda
    let tipo: 'codigo' | 'usuario' | 'rfid';
    let valor: string;

    if (codigo) {
      tipo = 'codigo';
      valor = codigo;
    } else if (usuario) {
      tipo = 'usuario';
      valor = usuario;
    } else {
      tipo = 'rfid';
      valor = rfid!;
    }

    // Buscar en bases externas
    const externo = await this.externalDbService.buscarPorIdentificador(
      tipo,
      valor,
    );
    if (!externo)
      throw new NotFoundException('Usuario no encontrado en las bases externas.');

    // ✅ Determinar correctamente el código de usuario según origen
    const codigoUsuario =
      'codigo' in externo
        ? externo.codigo.toString()
        : externo.usuario.toString();

    // 🔍 VALIDAR SI TIENE SUSPENSIÓN ACTIVA
    const hoy = new Date();
    const suspensionActiva = await this.localService.suspension.findFirst({
      where: {
        codigo,
        activa: true,
        fechaInicio: { lte: hoy },
        fechaFin: { gte: hoy },
      },
    });

    if (suspensionActiva) {
      throw new ForbiddenException(
        `Acceso denegado. El usuario tiene una suspensión activa desde ${suspensionActiva.fechaInicio.toLocaleDateString()} hasta ${suspensionActiva.fechaFin.toLocaleDateString()}. Motivo: ${suspensionActiva.motivo}`,
      );
    }

    // ✅ Si pasa la validación, continúa con el registro
    const inicioDia = new Date(hoy);
    inicioDia.setHours(0, 0, 0, 0);
    const finDia = new Date(hoy);
    finDia.setHours(23, 59, 59, 999);

    // Buscar registro existente (entrada = salida)
    const registroExistente = await this.localService.registroAcceso.findFirst({
      where: {
        codigoUsuario,
        entrada: { gte: inicioDia, lte: finDia },
        salida: { equals: undefined },
      },
      orderBy: { entrada: 'desc' },
    });

    if (
      registroExistente &&
      registroExistente.entrada.getTime() === registroExistente.salida.getTime()
    ) {
      // Actualizar salida
      return await this.localService.registroAcceso.update({
        where: { id: registroExistente.id },
        data: { salida: new Date() },
      });
    }

    // Crear nuevo registro (entrada = salida inicial)
    return await this.localService.registroAcceso.create({
      data: {
        codigoUsuario,
        modoAccesoId,
        entrada: new Date(),
        salida: new Date(),
      },
    });
  }

  async findAll() {
    return this.localService.registroAcceso.findMany({
      include: { accessMode: true },
      orderBy: { entrada: 'desc' },
    });
  }

  async findOne(id: number) {
    const registro = await this.localService.registroAcceso.findUnique({
      where: { id },
      include: { accessMode: true },
    });
    if (!registro) throw new NotFoundException('Registro no encontrado.');
    return registro;
  }

  async update(id: number, data: any) {
    const registro = await this.localService.registroAcceso.findUnique({
      where: { id },
    });
    if (!registro) {
      throw new NotFoundException(`No se encontró el registro con ID ${id}`);
    }

    return await this.localService.registroAcceso.update({
      where: { id },
      data: {
        codigoUsuario: data.codigoUsuario ?? registro.codigoUsuario,
        modoAccesoId: data.modoAccesoId ?? registro.modoAccesoId,
        entrada: data.entrada ? new Date(data.entrada) : registro.entrada,
        salida: data.salida ? new Date(data.salida) : registro.salida,
      },
    });
  }

  async remove(id: number) {
    return this.localService.registroAcceso.delete({ where: { id } });
  }
}
