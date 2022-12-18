import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
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
  getOne(@Param('id') userId: string): User {
    return this.usersService.getOne(userId);
  }

  @Post()
  create(@Body() user: User) {
    return this.usersService.createUser(user);
  }

  @Delete('/:id')
  remove(@Param('id') userId: string) {
    return this.usersService.deleteOne(userId);
  }

  @Patch('/:id')
  patch(@Param('id') userId: string, @Body() updateUser: User) {
    return {
      updateUser: userId,
      ...updateUser,
    };
  }
}
