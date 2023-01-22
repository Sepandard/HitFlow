const orderItemRoutes = require("./routes/index");

const orderItemModule = {
  init: (app) => {
    app.use("/api/order-item", orderItemRoutes);
    console.log("[module]: order item module loaded");
  },
};

module.exports = orderItemModule;