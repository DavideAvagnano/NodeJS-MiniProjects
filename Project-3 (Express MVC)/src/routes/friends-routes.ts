import { Router } from "express";
import { ipAddressMiddleware } from "../middlewares";
import {
  getFriends,
  getFriend,
  postFriend,
} from "../controllers/friends-controller";

const friendsRouter = Router();

friendsRouter.use(ipAddressMiddleware);

friendsRouter.get("/", getFriends);
friendsRouter.get("/:friendId", getFriend);
friendsRouter.post("/", postFriend);

export default friendsRouter;
