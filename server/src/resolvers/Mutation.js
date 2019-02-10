const { forwardTo } = require("prisma-binding");

const Mutations = {
  createUser: forwardTo("db"),
  createProgram: forwardTo("db")
};

module.exports = Mutations;
