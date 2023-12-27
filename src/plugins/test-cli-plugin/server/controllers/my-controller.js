'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('test-cli-plugin')
      .service('myService')
      .getWelcomeMessage();
  },
});
