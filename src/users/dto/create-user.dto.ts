import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly name: string;
  @IsNumber()
  @IsOptional()
  readonly age: number;
  @IsString()
  readonly email: string;
}
