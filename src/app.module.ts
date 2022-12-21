import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { RoutinesModule } from './routines/routines.module';

@Module({
  imports: [UsersModule, RoutinesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
