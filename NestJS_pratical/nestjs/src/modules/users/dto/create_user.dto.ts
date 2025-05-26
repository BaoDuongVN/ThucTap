import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { UserRole } from '../enum/role.enum';

export class CreateUserDto {
  @IsString({ message: 'Email must be a string' })
  @IsNotEmpty({ message: 'Email is required and cannot be empty' })
  @IsEmail()
  email: string;

  @IsString({ message: 'Password must be a string' })
  @IsNotEmpty({ message: 'Password is required and cannot be empty' })
  @MinLength(6, { message: 'Password must be at least 6 characters' })
  password: string;
  
  @IsString({ message: 'First name must be a string' })
  firstName?: string;

  @IsString({ message: 'Last name must be a string' })
  lastName?: string;

  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole = UserRole.USER;
}
