const  authModule  = require('./modules/auth/index');
const userModule = require('./modules/user');

const initModules = (app) => {
  authModule.init(app);
  userModule.init(app);
};

module.exports = initModules;
