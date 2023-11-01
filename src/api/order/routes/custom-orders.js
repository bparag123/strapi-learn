module.exports = {
  routes: [
    {
      // Path defined with an URL parameter
      method: "GET",
      path: "/orders/test",
      handler: "custom-orders.customOrders",
      config: {
        policies: [
          { name: "custom-policies", config: {} },
          //using global policy
          "global::my-global-policy",
        ],
      },
    },
  ],
};
