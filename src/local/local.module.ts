import { Module } from '@nestjs/common';
import { LocalService } from './local.service';

@Module({
  providers: [LocalService],
  exports: [LocalService], // exportarlo para usarlo en otros módulos
})
export class LocalModule {}