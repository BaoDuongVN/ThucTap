import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
import { UserService } from 'src/modules/users/user.service';
import { ExtractJwt } from 'passport-jwt';
import { PayloadDto } from '../dto/payload.dto';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,
    private userService: UserService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_SECRET'),
    });
  }

  async validate(payload: PayloadDto) {
    const user = await this.userService.findUserByEmail(payload.email);
    if (!user) {
      throw new UnauthorizedException('User is not found');
    }
    return {
      id: payload.id,
      email: payload.email,
      fullName: payload.fullName,
      role: payload.role,
    };
  }
}
