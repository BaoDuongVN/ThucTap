import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  Response,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create_user.dto';
import { LocalAuthGuard } from './guards/local_auth.guard';
import { JwtAuthGuard } from './guards/jwt_auth.guard';
import { LoginDto } from './dto/login.dto';
import { API_RESPONSE } from 'src/common/base/api_response.base';
import { UserService } from '../users/user.service';

@Controller('/auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post('/register')
  async register(@Body() createUserDto: CreateUserDto) {
    const data = await this.authService.register(createUserDto);
    return API_RESPONSE.success(data, 'User created successfully');
  }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Body() loginDto: LoginDto) {
    const data = await this.authService.login(loginDto);
    return API_RESPONSE.success(data, 'User logged in successfully');
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req, @Response() res) {
    res.status(200).json({
      message: 'success',
      data: req.user,
    });
  }
}
