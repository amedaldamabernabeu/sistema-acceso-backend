import { Test, TestingModule } from '@nestjs/testing';
import { TipoIngresoService } from './tipo-ingreso.service';

describe('TipoIngresoService', () => {
  let service: TipoIngresoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoIngresoService],
    }).compile();

    service = module.get<TipoIngresoService>(TipoIngresoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
