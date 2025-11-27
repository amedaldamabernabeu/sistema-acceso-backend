import { Test, TestingModule } from '@nestjs/testing';
import { DispositivosAccesoService } from './dispositivos-acceso.service';

describe('DispositivosAccesoService', () => {
  let service: DispositivosAccesoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DispositivosAccesoService],
    }).compile();

    service = module.get<DispositivosAccesoService>(DispositivosAccesoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
