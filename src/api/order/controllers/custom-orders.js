"use strict";

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async customOrders(ctx) {
    const orders = await strapi.db.query("api::order.order").findMany();

    const entry = await strapi.entityService.findMany("api::order.order", {
      
      filters: {
        status: 'pending'
      },

      populate: {
        customer: {
          fields: ['name', 'email'],
        },
      },

      // sort: ['id:desc'],
      sort: {
        customer: {
          createdAt: "asc",
        },
      },

      //Pagination Options
      start: 0,
      limit: 1,
    });
    return entry;
  },
}));
