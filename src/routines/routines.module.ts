import { Module } from '@nestjs/common';
import { RoutinesController } from 'src/routines/routines.controller';
import { RoutinesService } from './routines.service';

@Module({
  providers: [RoutinesService],
  controllers: [RoutinesController],
})
export class RoutinesModule {}
