module.exports = {
  routes: [
    {
      // Path defined with an URL parameter
      method: "GET",
      path: "/orders/test",
      handler: "custom-orders.customOrders",
    },
  ],
};
