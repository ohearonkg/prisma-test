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
  },
  async users(parent, args, ctx, info) {
    return ctx.db.query.users(
      {
        where: {
          username: args.username
        }
      },
      info
    );
  },
  async userProfile(parent, args, ctx, info) {
    return await ctx.db.query.user(
      {
        where: {
          id: args.id
        }
      },
      info
    );
  }
};
module.exports = Query;
