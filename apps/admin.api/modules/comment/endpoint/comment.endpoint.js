module.exports = function (app) {
  app.post('/api/comment', (req, res) => {
    return res.status(404).send(false);
  });
  app.post('/api/comment/:id/confirmed', (req, res) => {
    return res.status(404).send(false);
  });  
  app.post('/api/comment/:id/reject', (req, res) => {
    return res.status(404).send(false);
  });
  app.get('/api/comment', (req, res) => {
    return res.status(404).send(false);
  });
};
