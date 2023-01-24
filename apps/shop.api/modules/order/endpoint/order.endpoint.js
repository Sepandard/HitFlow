module.exports = function (app) {
  app.post('/api/order', (req, res) => {
    return res.status(404).send(false);
  });
  app.get('/api/order', (req, res) => {
    return res.status(404).send(false);
  });
  app.get('/api/order/count', (req, res) => {
    return res.status(404).send(false);
  });
  app.get('/api/order/:id', (req, res) => {
    return res.status(404).send(false);
  });
  app.put('/api/order/status-change/:id', (req, res) => {
    return res.status(404).send(false);
  });

};
