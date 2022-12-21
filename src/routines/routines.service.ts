import { Injectable } from '@nestjs/common';
import { CreateRoutineDto } from 'src/routines/dto/create-user.dto';
import { Routine } from 'src/routines/entities/routine.entity';

@Injectable()
export class RoutinesService {
  private routines: Routine[] = [];

  getAll(): Routine[] {
    return this.routines;
  }

  createRoutine(routine: CreateRoutineDto) {
    console.log('routine::: ', routine);
    this.routines.push({ id: this.routines.length + 1, ...routine });
  }
}
