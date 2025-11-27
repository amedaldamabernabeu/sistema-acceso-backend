import { Test, TestingModule } from '@nestjs/testing';
import { TipoIngresoController } from './tipo-ingreso.controller';

describe('TipoIngresoController', () => {
  let controller: TipoIngresoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoIngresoController],
    }).compile();

    controller = module.get<TipoIngresoController>(TipoIngresoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
