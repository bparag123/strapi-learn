"use strict";

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async customOrders(ctx) {
    const orders = await strapi.db.query("api::order.order").findMany();
    //custom logic here
    return orders;
  },
}));
