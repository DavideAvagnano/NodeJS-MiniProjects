# Express MVC with TypeScript and HBS

This is a simple web application built with Express, following the MVC (Model-View-Controller) architecture. The project uses TypeScript and Handlebars (HBS) for rendering views. It is structured to demonstrate a basic setup for building scalable Express applications.

## Features

- **Express** as the web framework
- **MVC architecture** for organizing the application
- **TypeScript** for type safety and modern JavaScript features
- **Handelbars (HBS)** as the templating engine for rendering views
- **Nodemon** for automatic server restarts during development
- **Custom middlewares** to enhance functionality

## Project Structure

```
/src
  /controllers         # Contains the logic for each route
  /middlewares         # Custom middleware (e.g., for logging or error handling)
  /models              # Models for data structure (can be expanded for database models)
  /public              # Static assets (CSS, JS, images)
  /routes              # Express route handlers
  /views               # Handlebars templates
  /server.ts           # Main entry point for the Express server
```

## Installation

Follow these steps to set up the project locally.

### Step 1: Initialize the project with a `package.json`

```bash
npm init -y
```

### Step 2: Install TypeScript and related dev-dependencies

```bash
npm i -D typescript @types/node ts-node
npx tsc --init
```

### Step 3: Install Express and TypeScript types

```bash
npm i express
npm i -D @types/express
```

### Step 4: Install Nodemon for development

```bash
npm i -D nodemon
```

### Step 5: Install Handlebars (HBS)

```bash
npm i hbs
```

### Step 6: Configure `tsconfig.json`

If not already done, ensure your `tsconfig.json` is properly configured. Here's an example configuration:

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "sourceMap": true,
    "noImplicitAny": true,
    "outDir": "dist"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

### Step 7: Add the start script in `package.json`

In the `package.json`, add the start script for running the project with Nodemon:

```json
"scripts": {
  "start": "nodemon --exec ts-node src/server.ts"
}
```

## Running the Application

After setting up the project and installing the dependencies, you can start the development server with the following command:

```bash
npm start
```

This will start the Express server, and the application will be available at `http://localhost:3000`.

## Project Details

- **Controller**: Each route is managed by its respective controller inside the `controllers` folder. For example, the `home-controller.ts` handles the logic for the homepage, and the `friends-controller.ts` manages the friends-related logic.
- **Middleware**: The `middlewares` folder contains custom middleware functions like `timingMiddleware`, which logs the time taken to process each request.
- **Views**: The `views` folder contains Handlebars templates used for rendering the HTML pages. The main view is `index.hbs`, which is rendered on the root URL (`/`).
- **Routes**: The `routes` folder defines the URL paths for various sections like `/friends`, `/messages`, and `/`.

## Example Routes

- `GET /`: Renders the homepage with a simple title and caption.
- `GET /friends`: Displays a list of friends.
- `GET /friends/:id`: Displays a single friend by ID.
- `GET /messages`: Displays the list of messages.

## Adding More Features

- **Database Integration**: You can expand the models and controllers to interact with a database (e.g., MongoDB, PostgreSQL).
- **Authentication**: Add authentication logic to the application by creating a `users` controller and integrating with a package like `passport.js`.

## License

This project is licensed under the ISC License.

## Contributing

If you have suggestions for improvements or would like to contribute, feel free to open a pull request or issue.
