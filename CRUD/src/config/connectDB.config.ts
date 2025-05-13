import dotenv from 'dotenv';
dotenv.config();
import { Sequelize } from 'sequelize-typescript';
import { User } from '../models/User'; // import models ở đây

const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  dialect: 'postgres',
  port: Number(process.env.DB_PORT),
  models: [User], // Nạp model
  logging: console.log, // hoặc false nếu không muốn log SQL
});

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully');
  } catch (error) {
    console.error('Unable to connect to the database: ', error);
    process.exit(1);
  }
}

export default sequelize;