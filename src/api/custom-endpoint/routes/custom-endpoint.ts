export default {
  routes: [
    {
     method: 'GET',
     path: '/custom-endpoint',
     handler:'custom-endpoint.customHandler', //'custom-endpoint.exampleAction',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
