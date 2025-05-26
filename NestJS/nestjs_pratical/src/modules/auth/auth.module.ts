import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from '../users/user.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [UserModule, PassportModule],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [],
})
export class AuthModule {}
