const asyncHandler = require('../../../middlewares/async');
const client = require('../../../config/db.js');

exports.postProduct = asyncHandler(async (req, res, next) => {
    const {
        categoryId,
        name,
        image,
        description,
        amount,
    } = req.body
    console.log(image);
    // await client.query(
    //   `
    //   INSERT INTO public."status"(
    //     "categoryId",
    //     "name",
    //     image,
    //     description,
    //     amount,
    //   )
    //   VALUES ($1,$2,$3,$4,$5);
      
    //   `,
    //   [],
    //   (err, result) => {
    //     if (!err) {
    //       if (result) {
    //         res.status(200).json(true);
    //       } else {
    //         res.status(500).json('something went wrong');
    //       }
    //     } else {
    //       res.status(500).json(err);
    //     }
    //   }
    // );
  });