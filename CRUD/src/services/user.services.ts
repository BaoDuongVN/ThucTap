import { User } from '../models/User';

export async function createUser() {
    const user = await User.create({
      email: 'example@email.com',
      password: 'password123', // nhớ hash ở thực tế nhé
      username: 'example_user',
    });
  
    console.log('User created:', user.toJSON());
}