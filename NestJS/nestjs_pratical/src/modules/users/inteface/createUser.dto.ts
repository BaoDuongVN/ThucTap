export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type UserWithoutPassword = Omit<User, 'password'>;