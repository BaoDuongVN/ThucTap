import { before } from 'node:test';
import {
  BeforeUpdate,
  BeforeValidate,
  Model,
  PrimaryKey,
} from 'sequelize-typescript';
import { Column, DataType, Table, Unique } from 'sequelize-typescript';

@Table({
  tableName: 'customers',
  timestamps: true,
})
export class User extends Model {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  declare id: string;

  @Unique
  @Column({ type: DataType.STRING, allowNull: false })
  declare email: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare passwordHash: string;

  @Column({ type: DataType.STRING, allowNull: true })
  declare firstName: string;

  @Column({ type: DataType.STRING, allowNull: true })
  declare lastName: string;

  @Column({ type: DataType.STRING, allowNull: true })
  declare fullName: string;

  @BeforeValidate
  @BeforeUpdate
  static getFullName(user: User): void {
    const firstName = user.getDataValue('firstName');
    const lastName = user.getDataValue('lastName');
    if (firstName && lastName) {
      user.setDataValue('fullName', `${firstName} ${lastName}`);
    } else if (firstName) {
      user.setDataValue('fullName', firstName);
    } else if (lastName) {
      user.setDataValue('fullName', lastName);
    } else {
      user.setDataValue('fullName', 'null');
    }
  }

  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: 'user',
  })
  declare role: string;
}
