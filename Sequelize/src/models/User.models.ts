import { Model, InferAttributes, InferCreationAttributes, DataTypes, CreationOptional } from "sequelize";
import {sequelize} from '../config/database.config';
import dotenv from 'dotenv';

dotenv.config();

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
}

export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare id: CreationOptional<number>;
  declare email: string;
  declare userName: string;
  declare password: string;
  declare role: CreationOptional<UserRole>;
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM(UserRole.ADMIN, UserRole.USER),
    allowNull: false,
    defaultValue: UserRole.USER,
  },
},
{
  tableName: 'users',
  timestamps: true,
  sequelize
})

export default User;