import { IsString, IsNotEmpty, MinLength, IsEmail } from 'class-validator';

export class AuthRequest {
  @IsString({ message: 'Email must be a string' })
  @IsEmail({}, { message: 'Email is not valid' })
  @IsNotEmpty({ message: 'Email is not empty' })
  email: string;

  @IsString({ message: 'Password must be a string' })
  @IsNotEmpty({ message: 'Password is not empty' })
  @MinLength(6, { message: 'Password must be at least 6 characters' })
  password: string;
}
