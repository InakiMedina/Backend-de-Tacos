const {
    Schema,
    model
} = require('mongoose');

const category = new Schema({
    //Id default by mongoDB
    name: {
        type: String,
        required: true
    }
});

module.exports = model('Categories', category);