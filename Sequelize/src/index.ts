import express from "express";
import connection from "./config/database.config";
import routes from "./routes/routes";
import router from "./routes/user.routes";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(routes);
app.use("/auth", router);

app.listen(port, async () => {
  await connection();
  console.log(`Server is running on port ${port}`);
});
