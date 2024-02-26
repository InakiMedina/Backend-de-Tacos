const { Schema, model } = require('mongoose');

const orders = new Schema({
    //Id default by mongoDB
    waiter: {type: Schema.Types.ObjectId, ref: "User", required: true},
    table: {type: Schema.Types.ObjectId, ref: "tables", required: true},
    date: {type: Date, required: true},
    customerCount: {type: Number, required: true},
     // orderProducts: {type: [OrderProduct], required: true},
    total: {type: Number, required: true},
    type: {type: String, required: true},
    status: {type: String, required: true},
});

module.exports = model('Orders', orders);