import { Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [];

  getAll(): User[] {
    return this.users;
  }

  getOne(id: string): User {
    return this.users.find((user) => user.id === +id);
  }

  deleteOne(id: string): boolean {
    this.users = this.users.filter((user) => user.id !== +id);
    return true;
  }

  createUser(userData: User) {
    this.users.push({
      id: this.users.length + 1,
      ...userData,
    });
  }
}
