module.exports = (config, { strapi }) => {
  return async (context, next) => {
    console.log("Global Middleware runs ");
    return next();
  };
};
