// // ./src/api/order/routes/order.js

// "use strict";
// /**
//  * order router.
//  */
// const { createCoreRouter } = require("@strapi/strapi").factories;
// module.exports = createCoreRouter("customised.customised"); // core route already created

module.exports = {
  routes: [
    {
      method: "POST",
      path: "/customised/:id",
      handler: "customised.postHandler",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/customised/:id",
      handler: "customised.getHandler",
      config: {
        auth: false,
      },
    },
  ],
};
