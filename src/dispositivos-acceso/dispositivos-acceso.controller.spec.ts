import { Test, TestingModule } from '@nestjs/testing';
import { DispositivosAccesoController } from './dispositivos-acceso.controller';

describe('DispositivosAccesoController', () => {
  let controller: DispositivosAccesoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DispositivosAccesoController],
    }).compile();

    controller = module.get<DispositivosAccesoController>(DispositivosAccesoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
