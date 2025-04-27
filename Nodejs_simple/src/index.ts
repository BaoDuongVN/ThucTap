import express from "express";
import path from "path";
import { configViewEngine } from "./config/viewEngine";

const app = express();
const port = process.env.PORT || 3000;
const webRouter = require('./routers/web');

// Config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// config template engine
configViewEngine(app);

// Khai báo route
app.use('/', webRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
