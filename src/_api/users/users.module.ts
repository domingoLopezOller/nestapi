import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Post } from '../posts/entities/post.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserRepository } from './user.repository';

@Module({
  imports:[TypeOrmModule.forFeature([User,UserRepository],"base2")],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
