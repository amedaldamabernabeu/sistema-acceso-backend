import { Test, TestingModule } from '@nestjs/testing';
import { AcademicoController } from './academico.controller';

describe('AcademicoController', () => {
  let controller: AcademicoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AcademicoController],
    }).compile();

    controller = module.get<AcademicoController>(AcademicoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
