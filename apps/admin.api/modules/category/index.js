const categoryRoutes = require("./routes/index");

const categoryModule = {
  init: (app) => {
    app.use("/api/category", categoryRoutes);
    console.log("[module]: category module loaded");
  },
};

module.exports = categoryModule;