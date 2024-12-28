# HTTP Server

This project is a simple HTTP server implemented using Node.js. It provides a mock API to manage a list of "friends" and displays predefined messages through specific endpoints.

## Features

- **GET /friends**: Retrieve the list of all friends.
- **GET /friends/:id**: Retrieve a specific friend by their ID.
- **POST /friends**: Add a new friend to the list.
- **GET /messages**: Retrieve a simple HTML message.

## How to Run

1. **Clone the Repository**:

   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Run the Server**:  
   Ensure you have Node.js installed, then run:

   ```bash
   node index.mjs
   ```

3. **Access the API**:  
   Open a browser or use an HTTP client (e.g., Postman) to interact with the server.  
   By default, the server runs on [http://localhost:3000](http://localhost:3000).

## API Endpoints

### GET /friends

Retrieve the list of all friends in the mock database.

**Example Response**:

```json
[
  { "id": 0, "name": "Nikola Tesla" },
  { "id": 1, "name": "Sir Isaac Newton" },
  { "id": 2, "name": "Albert Einstein" }
]
```

### GET /friends/:id

Retrieve a specific friend by ID.

**Example Request**:  
`GET /friends/1`

**Example Response**:

```json
{ "id": 1, "name": "Sir Isaac Newton" }
```

### POST /friends

Add a new friend to the list.

**How to Use**:  
In the browser console or a tool like Postman, execute the following code to send a POST request:

```javascript
fetch("http://localhost:3000/friends", {
  method: "POST",
  body: JSON.stringify({ id: 3, name: "Test" }),
})
  .then((response) => response.json())
  .then((friend) => console.log(friend));
```

**Example Request Body**:

```json
{ "id": 3, "name": "Test" }
```

**Example Response**:  
The server will return the same data that was sent.

### GET /messages

Retrieve a simple HTML page containing messages.

**Example Response**:

```html
<html>
  <body>
    <ul>
      <li>Hello Isaac!</li>
      <li>What are your thoughts on astronomy?</li>
    </ul>
  </body>
</html>
```

## Error Handling

If you make a request to an undefined route or use an unsupported method, the server will return a `404` status code.

## License

This project is for educational purposes. Feel free to use and modify it.
