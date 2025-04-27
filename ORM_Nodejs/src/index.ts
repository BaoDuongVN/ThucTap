import express from 'express';
import {configViewEngine} from './config/viewEngine.config';

const webRouter = require('./router/web.router');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Khai báo các route
app.use('/', webRouter);

// Cấu hình view engine
configViewEngine(app);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});