import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create_user.dto';
import { IsDate, IsEnum, IsOptional, IsString, MinLength } from 'class-validator';
import { UserRole } from '../enum/role.enum';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsOptional()
  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters' })
  password?: string;

  @IsOptional()
  @IsDate()
  birthday?: Date;

  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole = UserRole.USER;
}
