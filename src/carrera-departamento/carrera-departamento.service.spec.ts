import { Test, TestingModule } from '@nestjs/testing';
import { CarreraDepartamentoService } from './carrera-departamento.service';

describe('CarreraDepartamentoService', () => {
  let service: CarreraDepartamentoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarreraDepartamentoService],
    }).compile();

    service = module.get<CarreraDepartamentoService>(CarreraDepartamentoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
