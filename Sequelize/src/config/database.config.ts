import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const dbDatabase = process.env.DB_DATABASE || 'postgres';
const dbUser = process.env.DB_USER || 'postgres';
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const dbPort = Number(process.env.DB_PORT);
const dbDialect = process.env.DB_DIALECT as 'postgres';
const logging = false;

export const sequelize = new Sequelize(
    dbDatabase,
    dbUser,
    dbPassword,
    {
        host: dbHost,
        port: dbPort,
        dialect: dbDialect,
        logging: logging,
    }
)

const connection = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export default connection;