const asyncHandler = require('../../../middlewares/async');

var elasticsearch = require('elasticsearch');
const client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});

exports.search = asyncHandler(async (req, res, next) => {
  const param = req.query.search;
  console.log(req.query.search);
  client.search(
    {
      index: 'hamshahry-mohammad',
      body: {
        query: {
          multi_match: {
            query: param ? param : '',
            zero_terms_query: 'all',
            fields: ['merge']
          }
        }
      }
    },
    (error, response) => {
      const data = response.hits.hits.map((item) => {
        return { ...item['_source'] };
      }); 
      res.json(data);
    }
  );
});
