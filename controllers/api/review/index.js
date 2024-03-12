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
    },
    delete(req, res) {
        const review = review_service.getById(req.params.id)
        if (review) {
            review_service.delete(req.params.id)
            res.status(204).send('Review deleted successfully')
        } else {
            res.status(404).send('Review not found')
        }
    }
}

module.exports = review_controller

