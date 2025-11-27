import { Module } from '@nestjs/common';
import { AccessModeService } from './access-mode.service';
import { AccessModeController } from './access-mode.controller';
import { LocalModule } from '../local/local.module';

@Module({
  imports: [LocalModule],
  providers: [AccessModeService],
  controllers: [AccessModeController]
})
export class AccessModeModule {}




