import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create_user.dto';
import { IsEnum, IsOptional, IsString, MinLength } from 'class-validator';
import { UserRole } from '../enum/role.enum';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsOptional()
  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters' })
  password?: string;

  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole;
}
