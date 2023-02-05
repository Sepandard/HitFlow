const  authModule  = require('./modules/auth/index');
const userModule = require('./modules/user');
const productModule = require('./modules/product');
const categoryModule = require('./modules/category');
const orderModule = require('./modules/order');
const orderItemModule = require('./modules/order-item');
const commentModule = require('./modules/comment');

const initModules = (app) => {
  authModule.init(app);
  userModule.init(app);
  productModule.init(app);
  categoryModule.init(app);
  orderModule.init(app);
  orderModule.init(app);
  orderItemModule.init(app);
  commentModule.init(app);
};

module.exports = initModules;
