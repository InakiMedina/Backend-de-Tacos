const {
    Schema,
    model
} = require('mongoose');

const employee = new Schema({
    name: {
        type: String
    },
    salary: {
        type: int
    }
});

module.exports = model('Employees', employee);