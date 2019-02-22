const { forwardTo } = require("prisma-binding");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const Mutations = {
  async createUser(parent, args, ctx, info) {
    const { username, password } = args;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return ctx.db.mutation.createUser({
      data: {
        username,
        password: hashedPassword
      },
      info
    });
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
    return ctx.db.mutation.createProgram({
      data: {
        name: args.name,
        user: {
          connect: {
            id: args.userID
          }
        }
      }
    });
  }
};

module.exports = Mutations;
