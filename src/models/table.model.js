const {Schema, model} = require('mongoose');

const Table = new Schema({
    tableNumber : {type : Number, required: true},
    status : {type : String, required: true, default : "available"},
    waiter : {type : Schema.Types.ObjectId,
                ref : "Waiter",
                required : true},
});

module.exports = model("tables", Table);