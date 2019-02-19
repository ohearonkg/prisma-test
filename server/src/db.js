/**
 * This file connects to the remote
 * database hosted by prisma.io and
 * allows us to connect to it using
 * JavaScript
 */
const { Prisma } = require("prisma-binding");
require("dotenv").config();

const db = new Prisma({
  typeDefs: "src/generated/prisma.graphql",
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  debug: false
});

module.exports = db;
