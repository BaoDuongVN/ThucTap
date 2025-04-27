import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('demo', 'postgres', '123', {
    host: 'localhost',
    dialect: 'postgres'
})

export const connection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}