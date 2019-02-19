const { forwardTo } = require("prisma-binding");

const Query = {
  programs: forwardTo("db"),
  users: forwardTo("db"),
  exercises: forwardTo("db")
};
module.exports = Query;
