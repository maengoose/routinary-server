import { IsString } from 'class-validator';

export class CreateRoutineDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly description: string;
}
