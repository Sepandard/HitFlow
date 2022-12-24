const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = [
  './modules/auth/endpoint/auth.endpoint',
  './modules/user/endpoint/user.endpoint',
];

swaggerAutogen(outputFile, endpointsFiles);
