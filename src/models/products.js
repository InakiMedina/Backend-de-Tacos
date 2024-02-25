const {
    Schema,
    model,
    ObjectId,
} = require('mongoose');
const mongoose = require('mongoose');


const category = require("./category")

const products = new Schema({
    //Id default by mongoDB
    name: {
        type: String
    },
    unitPrice: {
        type: Number
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: 'category'
    }
});

module.exports = model('Products', products);