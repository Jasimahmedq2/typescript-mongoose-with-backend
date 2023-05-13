import Express from "express";
import { CreateUserController, findAllUserController, findSingleUserController } from "./user.controller";

const userRouter = Express.Router();

userRouter.post("/create/:id", CreateUserController);
userRouter.get('/all-user', findAllUserController)
userRouter.get("/:id", findSingleUserController);

export default userRouter
