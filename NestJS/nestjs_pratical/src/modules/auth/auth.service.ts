import { Injectable } from '@nestjs/common';
import { AuthRequest } from './auth.request.dto';
import { UsersService } from '../users/user.service';
import { UserWithoutPassword } from '../users/inteface/createUser.dto';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(email: string, password: string): Promise<UserWithoutPassword | null> {
    const user = await this.usersService.findOne(email);
    if (!user) {
      return null;
    }

    if (!(password === user.password)) {
      return null;
    }
    return user;
  }

  authenticate(request: AuthRequest): string {
    console.log(request);
    return "Finished";
  }

}
