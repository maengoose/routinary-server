import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [];

  getAll(): User[] {
    return this.users;
  }

  getOne(id: number): User {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found.`);
    }
    return user;
  }

  deleteOne(id: number) {
    this.getOne(id);
    this.users = this.users.filter((user) => user.id !== id);
  }

  createUser(userData: CreateUserDto) {
    this.users.push({
      id: this.users.length + 1,
      ...userData,
    });
  }

  updateOne(id: number, updateData: User) {
    const user = this.getOne(id);
    this.deleteOne(id);
    this.users.push({ ...user, ...updateData });
  }
}
