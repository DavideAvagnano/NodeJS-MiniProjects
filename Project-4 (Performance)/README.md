# Node.js and TypeScript Performance Example

This project is a basic example of a Node.js server written in TypeScript, focusing on simple performance handling techniques using blocking functions.

## Features

- **Express server setup**: A basic structure for an HTTP server.
- **Blocking example**: Demonstrates the impact of blocking operations on performance.
- **Clustering ready**: Includes commands for PM2 to enable multi-core scaling.
- **TypeScript support**: Configured for strong typing and easier development.
- **Automatic restarts**: Uses `nodemon` for seamless development with live reloading.

## Project Structure

The main logic is contained in the `server.ts` file. Key components include:

- `delay(duration: number)`: A simple blocking function to simulate CPU-intensive tasks.
- **Routes**:
  - `/`: Returns the process ID handling the request.
  - `/timer`: Simulates a 5-second blocking operation and then returns a response.

## Getting Started

### Prerequisites

- **Node.js** (v14 or later recommended)
- **npm** (bundled with Node.js)
- **PM2** (optional, for clustering)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Available Scripts

The following scripts are defined in the `package.json` file:

- **Development Mode**:

  ```bash
  npm start
  ```

  Runs the server in development mode using `nodemon`. The server will automatically restart on file changes.

- **Build**:

  ```bash
  npm run build
  ```

  Compiles the TypeScript code to JavaScript in the `dist` directory, cleaning any previous build output using `rimraf`.

- **Run with PM2**:
  To run the server using PM2:

  ```bash
  npm run pm2:start
  ```

  Runs the compiled server file (`dist/server.js`) as a PM2-managed process.

  To enable clustering across all available CPU cores:

  ```bash
  npm run pm2:start:max
  ```

### Run Locally with Nodemon

The project uses a `nodemon.json` configuration file to enable seamless development with automatic server restarts. The configuration is as follows:

```json
{
  "watch": ["./"],
  "ext": ".ts,.js",
  "exec": "ts-node server.ts"
}
```

To start the server in development mode:

```bash
npm start
```

Nodemon will:

- Watch all files in the current directory.
- Monitor changes to `.ts` and `.js` files.
- Execute the `server.ts` file using `ts-node`.

### Run Locally Without Nodemon

To manually start the server:

1. Build the project:
   ```bash
   npm run build
   ```
2. Run the compiled server:
   ```bash
   node dist/server.js
   ```

The server will listen on port `3000`.

## Example Routes

- `GET /`: Returns a message indicating the process ID handling the request.
- `GET /timer`: Simulates a 5-second blocking operation and then returns a response.

## Clustering with PM2

This project is configured for clustering using PM2. PM2 allows the application to scale across multiple CPU cores for improved performance.

1. Install PM2 globally:
   ```bash
   npm install -g pm2
   ```
2. Start the application in cluster mode:
   ```bash
   npm run pm2:start:max
   ```
3. Monitor the application:
   ```bash
   pm2 list
   ```

## Notes on Performance

The `/timer` route uses a blocking function (`delay`) to simulate CPU-bound work. While effective for demonstration, this approach blocks the Node.js event loop and can degrade server performance under heavy load.

To improve performance:

- Use asynchronous functions and offload CPU-bound tasks to worker threads or external services.
- Scale the application using clustering or distributed systems.

## Dependencies

- **Production**:
  - `express`: Web framework for Node.js.
  - `rimraf`: Utility for cleaning up the `dist` directory before rebuilding.
- **Development**:
  - `typescript`: TypeScript compiler.
  - `nodemon`: Automatically restarts the server on file changes.
  - `ts-node`: Runs TypeScript files directly in development.
  - `@types/express` and `@types/node`: TypeScript definitions for Express and Node.js.
