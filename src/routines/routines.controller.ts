import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateRoutineDto } from 'src/routines/dto/create-user.dto';
import { Routine } from 'src/routines/entities/routine.entity';
import { RoutinesService } from 'src/routines/routines.service';

@Controller('routines')
export class RoutinesController {
  constructor(private readonly routinesService: RoutinesService) {}

  @Get()
  findAll(): Routine[] {
    return this.routinesService.getAll();
  }

  @Post()
  create(@Body() routine: CreateRoutineDto) {
    console.log('routine::: ', routine);
    return this.routinesService.createRoutine(routine);
  }
}
