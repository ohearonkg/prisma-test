const Program = {
  async exercises(parent, args, ctx, info) {
    return ctx.db.query.exercises(
      {
        where: {
          Program_some: {
            id: parent.id
          }
        }
      },
      info
    );
  }
};

module.exports = Program;
