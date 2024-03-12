const express = require('express')
const review_router = require('./review')

const router = express.Router()

// registering child routers
router.use('/review', review_router)
module.exports = router
