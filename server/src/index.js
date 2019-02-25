/**
 * This file is the entry point into
 * our application and allows us to
 * create our GraphQL server using
 * GraphQL Yoga
 */
require("dotenv").config();
const createServer = require("./createServer");
const cookieParser = require("cookie-parser");

const server = createServer();

/**
 * Using cookie parser to set JWT
 * so that it is sent upon the FIRST
 * user request to our page
 */
server.express.use(cookieParser());

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
