module.exports = function (app) {
  app.get('/api/order-item', (req, res) => {
    return res.status(404).send(false);
  });  
};
