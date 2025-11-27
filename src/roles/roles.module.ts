import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { LocalModule } from '../local/local.module';

@Module({
  imports: [LocalModule],
  controllers: [RolesController],
  providers: [RolesService],
})
export class RolesModule {}
