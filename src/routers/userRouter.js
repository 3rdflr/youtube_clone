import express from "express";
import {
  edit,
  logout,
  see,
  githubLogin,
  githubCallback,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/logout", logout);
userRouter.get("/edit", edit);

userRouter.get("/github/login", githubLogin);
userRouter.get("/github/callback", githubCallback);
userRouter.get("/:id", see);

export default userRouter;
