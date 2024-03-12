const express = require('express');

const router = express.Router();
const review_controller = require('../../../controllers/api/review');

// Define API routes
router.get('/', (req, res)=>{
    review_controller.getAll(req, res);
});

module.exports = router;
