import { HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";
import { UserWithoutPassword } from "../users/inteface/createUser.dto";
import { ApiResponse } from "src/common/bases/api-response";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor (private authService: AuthService) {
        super();
    }

    async validate(username: string, password: string): Promise<UserWithoutPassword | null> {
        const user = await this.authService.validateUser(username, password);
        if (!user) {
            const response = ApiResponse.error("Email or password is wrong", "Fail", HttpStatus.UNAUTHORIZED);
            throw new HttpException(response, HttpStatus.UNAUTHORIZED);
        }

        return user;
    }
}