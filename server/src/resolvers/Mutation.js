const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
require("dotenv").config();

const Mutations = {
  async signup(parent, { firstname, lastname, email, password }, ctx, info) {
    // Salt and hash the user's password
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = await ctx.db.mutation.createUser(
      {
        data: {
          firstname,
          lastname,
          email: email.toLowerCase(),
          password: hashedPassword
        }
      },
      info
    );

    // Generate JWT for user
    const token = jwt.sign({ userID: user.id }, process.env.APP_SECRET);

    // Set JWT as Cookie
    ctx.response.cookie("token", token);

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
