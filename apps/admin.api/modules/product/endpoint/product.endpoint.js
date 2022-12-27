module.exports = function (app) {
    app.post('/api/product', (req, res) => {
      return res.status(404).send(false);
    });    
    app.get('/api/product', (req, res) => {
      return res.status(404).send(false);
    });
    app.get('/api/product/:id', (req, res) => {
      return res.status(404).send(false);
    });  
    app.put('/api/product/:id', (req, res) => {
      return res.status(404).send(false);
    });    
    app.delete('/api/product/:id', (req, res) => {
      return res.status(404).send(false);
    });
  };
  