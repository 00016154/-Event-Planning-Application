const { body, param } = require('express-validator');
const review_service = require('../../services/review')

const addReviewValidation = () => {
  return [
    body('productName')
      .notEmpty().withMessage('Product name must not be empty')
      .isLength({ min: 3, max: 100 }).withMessage('Product name must be no shorter than 3 and no longer than 100 characters'),
    body('reviewDateTime')
      .notEmpty().withMessage('Review date/time must not be empty')
      .matches(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d\s([01][0-9]|2[0-3]):([0-5][0-9])$/, 'g')
        .withMessage('Invalid date and time format. Please use "DD/MM/YYYY HH:mm" format.'),
    body('placeOfPurchasing')
      .notEmpty().withMessage('Place of purchasing should be filled'),
    body('reviewerNumber')
      .notEmpty().withMessage('Reviewer number must be filled in order to collect further reviews')
      .matches(/^\+998\d{9}$/).withMessage('Invalid phone number format.Format must be +998xxxxxxx'),
    body('review')
      .notEmpty().withMessage('Review cannot be empty')
      .isLength({ min: 20, max: 1000 }).withMessage('Review can be no shorter than 20 and no longer than 1000 characters'),
  ];
};

const deleteReviewValidation = () => {
  return [
    param('id').custom(async (id) => {
      const exists = await review_service.getById(id);
      if (!exists) {
        throw new Error('Review not found');
      }
    })
  ];
};
module.exports = {
    addReviewValidation,
    deleteReviewValidation
};
