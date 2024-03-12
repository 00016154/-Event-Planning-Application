const express = require('express');
const { validationResult } = require('express-validator');
const { addReviewValidation } = require('../../../validators/review');

const router = express.Router();
const review_controller = require('../../../controllers/api/review');

// Define API routes
router.get('/', (req, res)=>{
    review_controller.getAll(req, res);
});

router.post('/', addReviewValidation(), (req, res)=>{
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    review_controller.create(req, res)
})

module.exports = router;