const  authModule  = require('./modules/auth/index');
const userModule = require('./modules/user');
const productModule = require('./modules/product');

const initModules = (app) => {
  authModule.init(app);
  userModule.init(app);
  productModule.init(app);
};

module.exports = initModules;
