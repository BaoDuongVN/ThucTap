import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ValidationPipe } from '../../pipes/validation.pipe';
import { AuthRequest } from './auth.request.dto';
import { LocalStrategy } from './auth.local.strategy';

@Controller('v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalStrategy)
  @Get('/login')
  login(@Body(new ValidationPipe()) request: AuthRequest): unknown {
    try {
      return this.authService.authenticate(request);
    } catch (error) {
      console.error('Error: ', error);
    }
  }
}
