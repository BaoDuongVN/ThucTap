import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Query,
  UseGuards,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { UserService } from './user.service';
import { API_RESPONSE } from 'src/common/base/api_response.base';
import { UpdateUserDto } from './dto/update_user.dto';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole } from './enum/role.enum';
import { RolesGuard } from '../auth/guards/roles.guard';
import { JwtAuthGuard } from '../auth/guards/jwt_auth.guard';

@Controller('users')
@UseGuards(JwtAuthGuard, RolesGuard)
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Get('/findAll')
  @Roles(UserRole.ADMIN, UserRole.USER)
  async findAll() {
    const data = await this.userService.findAll();
    return data;
  }

  @Patch('/update')
  @Roles(UserRole.ADMIN)
  async update(
    @Query('email') email: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const data = await this.userService.update(email, updateUserDto);
    return API_RESPONSE.success(data, 'User updated successfully');
  }

  @Delete('/delete')
  async delete(@Query('email') email: string) {
    await this.userService.deleteUser(email);
    return API_RESPONSE.success(null, 'User deleted successfully');
  }
}
