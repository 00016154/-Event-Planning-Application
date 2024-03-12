const review_service = require('../../../services/review') 

const home_controller = { 
    index: async (req, res) =>{ 
        res.render('home'); 
    }, 
    add: async (req, res) =>{ 
        res.render('home/add_update', { mode: 'Add' }); 
    }, 
    update: async (req, res) =>{ 
        const reviewData = await review_service.getById(req.params.id); 
        res.render('home/add_update', { mode: 'Update', reviewData: reviewData }); 
    }
}; 

module.exports = home_controller; 