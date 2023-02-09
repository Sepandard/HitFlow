const orderItemRoutes = require("./routes/index");

const orderItemModule = {
  init: (app) => {
    app.use("/api/cart", orderItemRoutes);
    console.log("[module]: cart module loaded");
  },
};

module.exports = orderItemModule;