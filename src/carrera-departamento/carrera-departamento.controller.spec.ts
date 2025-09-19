import { Test, TestingModule } from '@nestjs/testing';
import { CarreraDepartamentoController } from './carrera-departamento.controller';

describe('CarreraDepartamentoController', () => {
  let controller: CarreraDepartamentoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarreraDepartamentoController],
    }).compile();

    controller = module.get<CarreraDepartamentoController>(CarreraDepartamentoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
