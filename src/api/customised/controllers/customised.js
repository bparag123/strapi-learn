const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController(
//   "api::customised.customised",
//   ({ strapi }) => ({
//     confirmOrder: async (ctx, next) => {
//       ctx.body = "ok";
//     },
//   })
// );
module.exports = {
  async getHandler(ctx) {
    try {
      ctx.body = {
        data: [{ user: 1, role: "admin" }],
      };
    } catch (err) {
      ctx.body = err;
    }
  },
  async postHandler(ctx) {
    try {
      ctx.body = "post";
    } catch (err) {
      ctx.body = err;
    }
  },
};
