import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getAll() {
    return 'This action returns all users';
  }

  @Get('/:id')
  getOne(@Param('id') userId: string) {
    return `This action returns one user, id: ${userId}`;
  }

  @Post()
  create() {
    return 'This action adds a new user';
  }

  @Delete('/:id')
  remove(@Param('id') userId: string) {
    return `This action removes a user, id: ${userId}`;
  }

  @Patch('/:id')
  patch(@Param('id') userId: string) {
    return `This action patches a user, id: ${userId}`;
  }
}
