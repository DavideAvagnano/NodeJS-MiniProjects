import { Router } from "express";
import { renderHome } from "../controllers/home-controller";

const homeRouter = Router();

homeRouter.get("/", renderHome);

export default homeRouter;
