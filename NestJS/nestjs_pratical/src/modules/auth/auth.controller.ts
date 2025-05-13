import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ValidationPipe } from '../../pipes/validation.pipe';
import { AuthRequest } from './auth.request.dto';

@Controller('v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('/getHello')
  getHello(): string {
    return this.authService.attemp();
  }

  @Post('/login')
  login(@Body(new ValidationPipe()) request: AuthRequest): unknown {
    try {
        console.log(request);
        return 1;
    } catch (error) {
        console.error("Error: ", error);

    }
  }
}
