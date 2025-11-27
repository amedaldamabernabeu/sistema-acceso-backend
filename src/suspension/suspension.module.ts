import { Module } from '@nestjs/common';
import { SuspensionService } from './suspension.service';
import { SuspensionController } from './suspension.controller';
import { LocalService } from '../local/local.service';
import { ExternalDbService } from '../external/external-db.service';

@Module({
  controllers: [SuspensionController],
  providers: [SuspensionService, LocalService, ExternalDbService],
  exports: [SuspensionService],
})
export class SuspensionModule {}









