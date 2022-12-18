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

interface User {
  id: string;
  name: string;
  age: number;
  sex: 'male' | 'female';
}

@Controller('users')
export class UsersController {
  @Get()
  getAll() {
    return 'This action returns all users';
  }

  @Get('/search')
  search(@Query('sex') userSex: 'male' | 'female') {
    return `search : ${userSex}`;
  }

  @Get('/:id')
  getOne(@Param('id') userId: string) {
    return `This action returns one user, id: ${userId}`;
  }

  @Post()
  create(@Body() user: User) {
    console.log('user::: ', user);
    return 'This action adds a new user';
  }

  @Delete('/:id')
  remove(@Param('id') userId: string) {
    return `This action removes a user, id: ${userId}`;
  }

  @Patch('/:id')
  patch(@Param('id') userId: string, @Body() updateUser: User) {
    return {
      updateUser: userId,
      ...updateUser,
    };
  }
}
