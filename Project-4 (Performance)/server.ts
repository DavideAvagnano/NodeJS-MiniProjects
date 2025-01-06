import express from "express";
import cluster from "cluster";
import os from "os";

const delay = (duration: number) => {
  const startTime = Date.now();
  while (Date.now() - startTime < duration) {
    // event loop is blocked...
  }
};

// CONFIGURATIONS
const app = express();

// ROUTES
app.get("/", (req: express.Request, res: express.Response) => {
  /*
  Examples of real life blocking functions (block the even loop)
  JSON.stringify({} => "{}")
  JSON.parse("{}" => {})
  [5,3,4,1].sort()
  */
  res.send(`Performance example: ${process.pid}`);
});

app.get("/timer", (req: express.Request, res: express.Response) => {
  delay(5000);
  res.send(`Beep beep beep: ${process.pid}`);
});

//CLUSTER
// First approach to improving node performance is using the built in "cluster module"
console.log("Running server.ts");
if (cluster.isPrimary) {
  console.log("Primary has been started...");
  /*
   fork() function calls new worker processes
   cluster.fork();
   cluster.fork();
   now when I make requests to /timer on chrome they are executed in parallel (but just 2 request in the same moment)
  */
  // use os to create the correct number of worker processes to run efficiently based on cpu logical cores
  const NUM_WORKER = os.cpus().length;
  for (let i = 0; i < NUM_WORKER; i++) {
    cluster.fork();
  }
  // for my Macbook Air M1 (CPU 8-core) I created 8 workers
  // it means in my browser I can make up to 8 requests at the same time and get increased performance
} else {
  console.log("Worker process started.");
  app.listen(3000);
}

// SERVER
// const PORT = 8000;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
