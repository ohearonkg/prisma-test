/**
 * This file is the entry point into
 * our application and allows us to
 * create our GraphQL server using
 * GraphQL Yoga
 */
require("dotenv").config();
const createServer = require("./createServer");

const server = createServer();

// TODO: use express js for JWT and
// TODO: use express to populate current user

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  res => {
    console.log(`Server running on http://localhost:${res.port}`);
  }
);
