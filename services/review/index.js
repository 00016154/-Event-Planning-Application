const fs = require('fs');

// access global mock db file
const reviews = require(global.reviews_db);

// write service method implementations
const review_service = {
    getAll() {
        return reviews;
    },
    getById(id) {
        return reviews.find(t => t.id == id);
    },    
    create(req, res) {
        let new_id = genRandId(4);
                
        const review = req.body;

        const new_review = {
            id: new_id,
            review: review
        };

        reviews.push(new_review);
        
        writeToFile(reviews);
        
        return new_review;
    },
    delete(id) {
        const index = reviews.findIndex(u => u.id == id);
        reviews.splice(index, 1);    
        writeToFile(reviews);
    }
};

// create function for overwriting the db file updated db content
let writeToFile = async (users) => {
    await fs.writeFileSync(
        global.reviews_db,
        JSON.stringify(
            users, null, 4
        ),
        'utf8'
    );
};

// generate random id inspired by uuid
let genRandId = (count) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < count; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

module.exports = review_service;
