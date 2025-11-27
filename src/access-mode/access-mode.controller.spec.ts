import { Test, TestingModule } from '@nestjs/testing';
import { AccessModeController } from './access-mode.controller';

describe('AccessModeController', () => {
  let controller: AccessModeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccessModeController],
    }).compile();

    controller = module.get<AccessModeController>(AccessModeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
