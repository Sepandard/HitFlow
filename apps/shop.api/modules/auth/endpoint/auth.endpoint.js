module.exports = function (app) {
  app.post('/api/auth/login', (req, res) => {
    return res.status(404).send(false);
  });
};
