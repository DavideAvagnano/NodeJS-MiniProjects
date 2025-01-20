import fs from "fs";
import path from "path";
import https from "https";
import express from "express";
import dotenv from "dotenv";

// CONFIGURATION
dotenv.config();

const app = express();
const server = https.createServer(
  {
    key: fs.readFileSync("key.pem"),
    cert: fs.readFileSync("cert.pem"),
  },
  app
);

// ROUTES
app.get("/", (req: express.Request, res: express.Response) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/secret", (req: express.Request, res: express.Response) => {
  return res.send("Your personal secret value is 54!");
});

// SERVER
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
