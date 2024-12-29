import express from "express";
import path from "path";

import { timingMiddleware } from "./middlewares";

import homeRouter from "./routes/home-routes";
import friendsRouter from "./routes/friends-routes";
import messagesRouter from "./routes/messages-routes";

// --------------
// CONFIGURATIONS
const app = express();

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use(timingMiddleware);

app.use("/site", express.static(path.join(__dirname, "public")));
app.use(express.json());

// ------
// ROUTES
app.use("/", homeRouter);
app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

// ------
// SERVER
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
