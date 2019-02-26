/**
 * This file is the entry point into
 * our application and allows us to
 * create our GraphQL server using
 * GraphQL Yoga
 */
const cookieParser = require("cookie-parser");
const createServer = require("./createServer");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const server = createServer();

/**
 * Using cookie parser to set JWT
 * so that it is sent upon the FIRST
 * user request to our page
 */
server.express.use(cookieParser());

/**
 * Verify the incoming JWT to
 * obtain client id should a token
 * be passed with the response
 */
server.express.use((req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    const { userID } = jwt.verify(token, process.env.APP_SECRET);
    req.userID = userID;
  }
  next();
});

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
