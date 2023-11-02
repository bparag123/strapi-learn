module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/test-cli-api',
     handler: 'test-cli-api.exampleAction',
     config: {
       policies: ['api::test-cli-api.test-cli-policy'],
       middlewares: [],
       auth: false
     },
    },
  ],
};
