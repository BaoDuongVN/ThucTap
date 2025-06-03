import {
  IsDate,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { Transform } from 'class-transformer';
import { UserRole } from '../enum/role.enum';
import { transformDate } from 'src/common/utils/transformDate.utils';


export class CreateUserDto {
  @IsString({ message: 'Email must be a string' })
  @IsNotEmpty({ message: 'Email is required and cannot be empty' })
  @IsEmail()
  email: string;

  @IsString({ message: 'Password must be a string' })
  @IsNotEmpty({ message: 'Password is required and cannot be empty' })
  @MinLength(6, { message: 'Password must be at least 6 characters' })
  password: string;

  @IsOptional()
  @IsString({ message: 'First name must be a string' })
  firstName?: string;

  @IsOptional()
  @IsString({ message: 'Last name must be a string' })
  lastName?: string;

  @Transform(({ value }) => transformDate(value))
  @IsDate({ message: 'Birthday must be a valid date in dd/MM/yyyy format' })
  @IsNotEmpty({ message: 'Birthday is required and cannot be empty' })
  birthday: Date;

  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole = UserRole.USER;
}
