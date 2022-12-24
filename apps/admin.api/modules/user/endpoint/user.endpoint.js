module.exports = function (app) {
  app.get('/api/user', (req, res) => {
    return res.status(404).send(false);
  });
  app.get('/api/user/:id', (req, res) => {
    return res.status(404).send(false);
  });
};
