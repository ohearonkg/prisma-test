const { forwardTo } = require("prisma-binding");
const bcrypt = require("bcrypt");

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
  async signin(parent, { username, password }, ctx, info) {
    /**
     * 1) Check to see if a user with the
     * inputted username exists
     */
    const user = await ctx.db.query.user({
      where: {
        username
      }
    });

    if (!user) {
      throw new Error(`No user with username${username} found`);
    }

    /**
     * Check if their password is valid
     */
    const correctPassword = await bcrypt.compare(password, user.password);

    if (!correctPassword) {
      throw new Error(`Inccorrect password for user ${username}`);
    }

    return user;
  }
};
module.exports = Query;
