"use strict";

/**
 * employee router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::employee.employee", {
  config: {
    find: {
      //using policy of another api
      policies: ["api::order.custom-policies"],
    },
  },
});
