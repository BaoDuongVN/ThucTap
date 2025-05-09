import { Router } from "express";
import {
  findAllUsersController,
  createNewUserController,
  getUserByIdController,
  updateUserByIdController,
  deleteUserByIdController,
  updateUserByUsernameController,
} from "../controllers/home.controllers";

const routes = Router();

routes.get("/", (req, res) => {
  res.send("Hello World!");
});

routes.get("/admin/users", findAllUsersController);
routes.post("/create-user", createNewUserController);
routes.get("/users/:id", getUserByIdController);
routes.put("/users/:id", updateUserByIdController);
routes.delete("/users/:id", deleteUserByIdController);
routes.put("/users/:userName", updateUserByUsernameController);

export default routes;
