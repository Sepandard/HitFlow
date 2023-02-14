const client = require('../../../config/db');
const asyncHandler = require('../../../middlewares/async');


exports.off = asyncHandler(async (req, res, next) => {
 
    await client.query(
      `
      SELECT 
      prod."id"
      ,prod."categoryId"
      ,prod."name"
      ,prod.image
      ,prod.amount
	  ,prod.off
	  ,prod.description
	  ,cat.title as categoryTitle
        from public.product prod
	    INNER JOIN public.category cat  on prod."categoryId" = cat."id"
        WHERE "isDeleted" = 0 AND  prod."off" IS NOT NULL OR prod."off" <> 0
        ORDER BY id ASC
      
    `,
      [],
      (err, result) => {
        if (!err) {
          if (result) {
            

            const data = result.rows.map((item) => {
              return {
                ...item,
                image: `http://localhost:5020/${item.image}`
              };
            });
            res.status(200).json(data);
          } else {
            res.status(500).json('something went wrong');
          }
        } else {
          console.log(err); 
          res.status(500).json(err);
        }
      }
    );
  });
  