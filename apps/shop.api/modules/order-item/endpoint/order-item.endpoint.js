module.exports = function (app) {
  app.get('/api/cart', (req, res) => {
    return res.status(404).send(false);
  });    
  app.get('/api/total', (req, res) => {
    return res.status(404).send(false);
  });  
};
