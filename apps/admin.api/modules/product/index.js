const productRoutes = require("./routes/index");

const productModule = {
  init: (app) => {
    console.log(app);
    app.use("/api/product", productRoutes);
    console.log("[module]: product module loaded");
  },
};

module.exports = productModule;