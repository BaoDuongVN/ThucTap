import express from 'express';
import {configViewEngine} from './config/viewEngine.config';
import sequelize from './config/connectDB.config';
import { createUser } from './services/user.services';

const webRouter = require('./router/web.router');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Khai báo các route
app.use('/', webRouter);

// Cấu hình view engine
configViewEngine(app);

export async function startApp() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });

    await createUser(); // gọi hàm tạo user ở đây

  } catch (err) {
    console.error('Database error:', err);
  }
}

startApp();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});