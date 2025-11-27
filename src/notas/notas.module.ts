import { Module } from '@nestjs/common';
import { NotasService } from './notas.service';
import { NotasController } from './notas.controller';
import { LocalModule } from '../local/local.module';

@Module({
  imports: [LocalModule],
  controllers: [NotasController],
  providers: [NotasService],
})
export class NotasModule {}
