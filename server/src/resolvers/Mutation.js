const { forwardTo } = require("prisma-binding");

const Mutations = {
  createUser: forwardTo("db"),
  createProgram: forwardTo("db"),
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
  }
};

module.exports = Mutations;
