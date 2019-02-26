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
    ctx.response.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 // 24 hour cookie
    });

    return user;
  },
  async signin(parent, { email, password }, ctx, info) {
    /**
     * First determine if a user with the provided
     * email address exists
     */
    const user = await ctx.db.query.user(
      {
        where: {
          email
        }
      },
      info
    );

    if (!user) {
      throw new Error(`No user with ${email} exists`);
    }

    /**
     * If we know the user to exist we check their
     * password
     */
    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      throw new Error("Incorrect password");
    }

    /**
     * If the user has entered the correct password
     * then signin is successful and we set our JWT
     * within the cookie
     */
    const token = jwt.sign({ userID: user.id }, process.env.APP_SECRET);

    // Set JWT as Cookie
    ctx.response.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 // 24 hour cookie
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
  },
  async signout(parent, args, ctx, info) {
    ctx.response.clearCookie("token");
    return { message: "Succesfully Signed Out" };
  }
};

module.exports = Mutations;
