const fs = require('fs')
// access global mock db file
const reviews = require(global.reviews_db)

// write service method implementations
const review_service = {
    getAll() {
        return reviews
    }
}

module.exports = review_service
