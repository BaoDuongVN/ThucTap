import { Model } from 'sequelize-typescript';
import {
  AutoIncrement,
  Column,
  DataType,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';

@Table({
  tableName: 'users',
  timestamps: true,
})
export class User
  extends Model<User>
{
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  declare id: number;

  @Unique
  @Column({ type: DataType.STRING, allowNull: false })
  declare username: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare password: string;
}
