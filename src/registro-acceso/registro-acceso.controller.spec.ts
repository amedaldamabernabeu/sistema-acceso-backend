import { Test, TestingModule } from '@nestjs/testing';
import { RegistroAccesoController } from './registro-acceso.controller';

describe('RegistroAccesoController', () => {
  let controller: RegistroAccesoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegistroAccesoController],
    }).compile();

    controller = module.get<RegistroAccesoController>(RegistroAccesoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
