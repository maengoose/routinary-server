import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  getAll(): User[] {
    return this.usersService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') userId: number): User {
    return this.usersService.getOne(userId);
  }

  @Post()
  create(@Body() user: CreateUserDto) {
    return this.usersService.createUser(user);
  }

  @Delete('/:id')
  remove(@Param('id') userId: number) {
    return this.usersService.deleteOne(userId);
  }

  @Patch('/:id')
  patch(@Param('id') userId: number, @Body() updateUser: User) {
    return this.usersService.updateOne(userId, updateUser);
  }
}
