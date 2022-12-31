module.exports = function (app) {
    app.post('/api/category', (req, res) => {
      return res.status(404).send(false);
    });    
    app.get('/api/category', (req, res) => {
      return res.status(404).send(false);
    });
    app.get('/api/category/:id', (req, res) => {
      return res.status(404).send(false);
    });  
    app.put('/api/category/:id', (req, res) => {
      return res.status(404).send(false);
    });    
};
  