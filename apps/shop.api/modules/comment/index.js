const commentRoutes = require("./routes/index");

const commentModule = {
  init: (app) => {
    app.use("/api/comment", commentRoutes);
    console.log("[module]: comment module loaded");
  },
};

module.exports = commentModule;