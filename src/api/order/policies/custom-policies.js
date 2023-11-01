module.exports = (policyContext, config, { strapi }) => {

    //here we can do the logic to do before the route
    console.log("Order Policy Executed");
  
    return true; // If you return nothing, Strapi considers you didn't want to block the request and will let it pass
  };