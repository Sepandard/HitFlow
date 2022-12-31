const  authModule  = require('./modules/auth/index');
const userModule = require('./modules/user');
const productModule = require('./modules/product');
const categoryModule = require('./modules/category');

const initModules = (app) => {
  authModule.init(app);
  userModule.init(app);
  productModule.init(app);
  categoryModule.init(app);
};

module.exports = initModules;
