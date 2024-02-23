const { Schema, model } = require('mongoose');

const category = new Schema({
    //Id default by mongoDB
    waiter: {type: User, required: true},
    table: {type: Table, required: true},
    date: {type: Date, required: true},
    customerCount: {type: Number, required: true},
    orderProducts: {type: [OrderProduct], required: true},
    total: {type: Number, required: true},
    type: {type: String, required: true},
    status: {type: String, required: true},
});

module.exports = model('Categories', category);