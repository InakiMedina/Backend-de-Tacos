const {
    Schema,
    model,
    Decimal128
} = require('mongoose');

const category = new Schema({
    //Id default by mongoDB
    name: {
        type: String
    }
});

const products = new Schema({
    //Id default by mongoDB
    name: {
        type: String
    },
    unitPrice: {
        type: Decimal128
    },
    category: {
        type: category,
        default: {}
    }
});

module.exports = model('Products', products);