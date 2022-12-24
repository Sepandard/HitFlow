const userRoutes = require("./routes/index");

const userModule = {
  init: (app) => {
    console.log(app);
    app.use("/api/user", userRoutes);
    console.log("[module]: user module loaded");
  },
};

module.exports = userModule;