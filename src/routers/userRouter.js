import express from "express";
import {
  getEdit,
  postEdit,
  logout,
  see,
  githubLogin,
  githubCallback,
  getChangePassword,
  postChangePassword,
} from "../controllers/userController";
import {
  protectorMiddleware,
  publicOnlyMiddleware,
  avatarUpload,
} from "../middlewares";

const userRouter = express.Router();

userRouter
  .route("/edit")
  .all(protectorMiddleware)
  .get(getEdit)
  .post(avatarUpload.single("avatar"), postEdit);
userRouter
  .route("/change-password")
  .all(protectorMiddleware)
  .get(getChangePassword)
  .post(postChangePassword);

userRouter.get("/logout", protectorMiddleware, logout);

userRouter.get("/github/login", publicOnlyMiddleware, githubLogin);
userRouter.get("/github/callback", publicOnlyMiddleware, githubCallback);

userRouter.get("/:id", see);

export default userRouter;
