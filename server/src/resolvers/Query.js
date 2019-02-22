const { forwardTo } = require("prisma-binding");

const Query = {
  programs: forwardTo("db"),
  exercises: forwardTo("db"),
  async program(parent, args, ctx, info) {
    return ctx.db.query.program(
      {
        where: {
          id: args.programID
        }
      },
      info
    );
  }
};
module.exports = Query;
