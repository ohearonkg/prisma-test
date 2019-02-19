const { forwardTo } = require("prisma-binding");

const Mutations = {
  createUser: forwardTo("db"),
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
