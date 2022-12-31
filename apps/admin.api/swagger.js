const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = [
  './modules/auth/endpoint/auth.endpoint',
  './modules/user/endpoint/user.endpoint',
  './modules/product/endpoint/product.endpoint',
  './modules/product/category/category.endpoint',
];

swaggerAutogen(outputFile, endpointsFiles);
