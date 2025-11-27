import { Module } from '@nestjs/common';
import { EventosService } from './eventos.service';
import { EventosController } from './eventos.controller';
import { LocalModule } from '../local/local.module';

@Module({
  imports: [LocalModule],
  controllers: [EventosController],
  providers: [EventosService],
})
export class EventosModule {}
