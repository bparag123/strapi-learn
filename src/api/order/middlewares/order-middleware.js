module.exports = (config, { strapi }) => {
  return async (context, next) => {
    console.log("Order Middleware runs ");
    console.log("context before", context.response);

    //Modify Request Object
    context.request.orderVar = "This is Variable";

    await next();
    
    //Modify Response Object
    // context.response.body = 'Temporary Down';
  };
};
