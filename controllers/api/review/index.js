// import specific service class
const review_service = require('../../../services/review')

// mention the service's needed actions (methods)
const review_controller = {
    getAll(req, res) {
        res.json(review_service.getAll())
    },
    create(req, res) {
        res.status(201).json(
            review_service.create(req, res)
        )
    }
}

module.exports = review_controller

