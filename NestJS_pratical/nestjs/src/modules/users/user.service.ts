import {
  ConflictException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entity/user.entity';
import { CreateUserDto } from './dto/create_user.dto';
import { Repository } from 'sequelize-typescript';
import { UserWithoutPassword } from './interfaces/user.interface';
import { hashPassword } from 'src/common/utils/hash.utils';
import { UpdateUserDto } from './dto/update_user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User) private readonly userModel: Repository<User>,
  ) {}

  async findAll(): Promise<UserWithoutPassword[] | null> {
    const user = await this.userModel.findAll();
    if (!user.length) {
      return null;
    }
    const userWithoutPassword = user.map((userInstance) => {
      const { passwordHash, ...result } = userInstance.dataValues;
      return result;
    })
    return userWithoutPassword;
  }

  async findUserByName(fullName: string): Promise<User | null> {
    return this.userModel.findOne({ where: { fullName } });
  }

  async findUserByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ where: { email } });
  }

  async createUser(
    createUserDto: CreateUserDto,
  ): Promise<Omit<User, 'passwordHash'>> {
    const existingUser = await this.userModel.findOne({
      where: { email: createUserDto.email },
    });
    if (existingUser) {
      throw new ConflictException('Email already exists');
    }

    try {
      const hashedPassword = await hashPassword(createUserDto.password);
      const data = { ...createUserDto, passwordHash: hashedPassword };
      const user = await this.userModel.create(data);
      const { passwordHash, ...result } = user.dataValues;
      return result;
    } catch (error) {
      throw new HttpException(
        'Error creating user',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(
    email: string,
    updateUserDto: UpdateUserDto,
  ): Promise<Omit<User, 'passwordHash'>> {
    const existingUser = await this.userModel.findOne({ where: { email } });
    if (!existingUser) {
      throw new ConflictException(`User with email ${email} not found`);
    }
    await existingUser.update(updateUserDto);
    await existingUser.reload();
    const { passwordHash, ...result } = existingUser.dataValues;
    return result;
  }

  async deleteUser(fullName: string): Promise<void> {
    const user = await this.userModel.findOne({ where: { fullName } });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    await user.destroy();
  }
}
