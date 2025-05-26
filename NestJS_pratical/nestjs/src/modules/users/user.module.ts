import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './entity/user.entity';
import { UsersController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    SequelizeModule.forFeature([User]),
  ],
  controllers: [UsersController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
