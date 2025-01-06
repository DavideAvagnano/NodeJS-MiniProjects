import { Router } from "express";
import { getMessages, postMessage } from "../controllers/messages-controller";

const messagesRouter = Router();

messagesRouter.get("/", getMessages);
messagesRouter.post("/", postMessage);

export default messagesRouter;
