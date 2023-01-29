const orderRoutes = require("./routes/index");

const orderModule = {
  init: (app) => {
    app.use("/api/order", orderRoutes);
    console.log("[module]: order module loaded");
  },
};

module.exports = orderModule;