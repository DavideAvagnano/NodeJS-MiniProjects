import express from "express";
import path from "path";

const app = express();

// ROUTES
app.get("/", (req: express.Request, res: express.Response) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/secret", (req: express.Request, res: express.Response) => {
  return res.send("Your personal secret value is 54!");
});
// sent by http by default --> the connection to this API is not secure and not encrypted

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
