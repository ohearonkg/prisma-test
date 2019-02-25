const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

const Mutations = {
  async createUser(parent, { email, password }, ctx, info) {
    // Salt and hash the user's password
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = await ctx.db.mutation.createUser({
      data: {
        email,
        password: hashedPassword
      },
      info
    });

    // Generate JWT for user
    const token = jwt.sign({ userID: user.id }, process.env.APP_SECRET);

    // Set JWT as Cookie
    ctx.response.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24
    });
    return user;
  },
  async createExercise(parent, args, ctx, info) {
    return ctx.db.mutation.createExercise(
      {
        data: {
          type: args.type,
          name: args.name,
          description: args.description
        }
      },
      info
    );
  },
  async createProgram(parent, args, ctx, info) {
    return ctx.db.mutation.createProgram(
      {
        data: {
          name: args.name,
          user: {
            connect: {
              id: args.userID
            }
          }
        }
      },
      info
    );
  }
};

module.exports = Mutations;
