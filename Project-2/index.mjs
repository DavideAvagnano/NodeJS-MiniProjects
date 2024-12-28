import http from "http";

// Define the port and create an HTTP server instance
const PORT = 3000;
const server = http.createServer();

// Mock database
const friends = [
  {
    id: 0,
    name: "Nikola Tesla",
  },
  {
    id: 1,
    name: "Sir Isaac Newton",
  },
  {
    id: 2,
    name: "Albert Einstein",
  },
];

// Listen for the 'request' event and handle incoming requests
server.on("request", (req, res) => {
  const items = req.url.split("/");

  if (req.method === "POST" && items[1] === "friends") {
    req.on("data", (data) => {
      const friend = data.toString();
      console.log("Request:", friend);
      friends.push(JSON.parse(friend));
    });
    req.pipe(res);
  } else if (req.method === "GET" && items[1] === "friends") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    if (items.length === 3) {
      const friendIndex = Number(items[2]);
      res.end(JSON.stringify(friends[friendIndex]));
    } else {
      res.end(JSON.stringify(friends));
    }
  } else if (req.method === "GET" && items[1] === "messages") {
    res.setHeader("Content-Type", "text/html");
    const htmlContent = `
      <html>
        <body>
          <ul>
            <li>Hello Isaac!</li>
            <li>What are your thoughts on astronomy?</li>
          </ul>
        </body>
      </html>
    `;
    res.end(htmlContent);
  } else {
    res.statusCode = 404;
    res.end();
  }
});

// Start the server and listen on the defined port
server.listen(PORT, () => {
  console.log(`Server listning on port ${PORT}`);
}); // 127.0.0.1 => localhost
