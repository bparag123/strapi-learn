'use strict';

/**
 * `test-cli-middleware` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In test-cli-middleware middleware.');

    await next();
  };
};
