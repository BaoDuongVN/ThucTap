import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class LoginDto {
    @IsEmail()
    @IsString({ message: 'Email must be a string' })
    @IsNotEmpty({ message: 'Email is required and cannot be empty' })
    email: string;

    @IsString({ message: 'Password must be a string' })
    @IsNotEmpty({ message: 'Password is required and cannot be empty' })
    @MinLength(6, { message: 'Password must be at least 6 characters' })
    password: string;
}