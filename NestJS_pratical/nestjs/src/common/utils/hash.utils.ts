import * as bcrypt from 'bcrypt';

export async function hashPassword(password: string): Promise<string> {
  if (!password) {
    throw new Error('Password is required');
  }
  return bcrypt.hashSync(password, 10);
}

export async function comparePassword(
  password: string,
  hashedPassword: string,
): Promise<boolean> {
  if (!password || !hashedPassword) {
    throw new Error('Password and hashedPassword are required');
  }
  return bcrypt.compareSync(password, hashedPassword);
}
