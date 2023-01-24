const authRouter = require("./routes/index");

const authModule = {
  init: (app) => {
    app.use("/api/auth", authRouter);
    console.log("[module]: auth module loaded");
  },
};

module.exports = authModule;