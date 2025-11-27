import { Test, TestingModule } from '@nestjs/testing';
import { AccessModeService } from './access-mode.service';

describe('AccessModeService', () => {
  let service: AccessModeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccessModeService],
    }).compile();

    service = module.get<AccessModeService>(AccessModeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
