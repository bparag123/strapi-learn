module.exports = {
  myJob: {
    task: ({ strapi }) => {
      console.log("My Cron ");
    },
    options: {
      rule: "0 0 1 * * 1",
    },
  },
};
