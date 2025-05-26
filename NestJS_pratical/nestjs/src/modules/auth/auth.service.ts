import { Injectable } from '@nestjs/common';
import { UserService } from '../users/user.service';
import { JwtService } from '@nestjs/jwt';
import { comparePassword } from 'src/common/utils/hash.utils';
import { CreateUserDto } from '../users/dto/create_user.dto';
import { LoginDto } from './dto/login.dto';
import { User } from '../users/entity/user.entity';
import { UserWithoutPassword } from '../users/interfaces/user.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<UserWithoutPassword | null> {
    const user = await this.userService.findUserByEmail(email);
    if (!user) {
      throw new Error('User not found');
    }
    const isMatchPassword = await comparePassword(password, user.passwordHash);
    if (isMatchPassword) {
      const { passwordHash, ...result } = user.dataValues;
      return result;
    }
    return null;
  }

  async login(loginDto: LoginDto) {
    const user = await this.userService.findUserByEmail(loginDto.email);
    if (!user) {
      throw new Error('User not found');
    }
    const isMatchPassword = await comparePassword(
      loginDto.password,
      user.passwordHash,
    )
    if (!isMatchPassword) {
      throw new Error('Password is not matched');
    }
    const payload = { email: user.email, sub: user.id, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        role: user.role,
      },
    };
  }

  async register(createUserDto: CreateUserDto) {
    const data = await this.userService.createUser(createUserDto);
    return data;
  }
}
