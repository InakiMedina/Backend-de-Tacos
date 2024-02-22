const {
    Schema,
    model
} = require('mongoose');

const user = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    type: {
        type: String
    }
});

module.exports = model('User', user);