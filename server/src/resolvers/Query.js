const { forwardTo } = require("prisma-binding");
const jwt = require("jsonwebtoken");

const Query = {
  programs: forwardTo("db"),
  exercises: forwardTo("db"),
  user: forwardTo("db"),
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
  },
  async currentlyLoggedInUser(parent, args, ctx, info) {
    /**
     * Determine if there is a cookie present
     * containing the user ID
     */
    const { token } = ctx.request.cookies;

    if (!token) {
      return null;
    }

    const { userID } = jwt.verify(token, process.env.APP_SECRET);
    return ctx.db.query.user(
      {
        where: {
          id: userID
        }
      },
      info
    );
  }
};
module.exports = Query;
