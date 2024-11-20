import express from "express";
import { watch, edit, upload, deleteVid } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("upload", upload);
videoRouter.get("/:id(\\d+)", watch);
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/delete", deleteVid);

export default videoRouter;
