const express = require('express');

//const router = require('./src/routes');

const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

dotenv.config();

console.log('PORT=' + process.env.PORT);

const app = express();

app.use(cors());

const port = process.env.PORT || 3000;

//app.use(router);

//Connect to MongoDB
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');

    //Start the application
    app.listen(port, () => {
        console.log(`App running in port ${port}`)
    });

}).catch((err) => {
    console.log('Failed to connect to MongoDB: ', err);
});

app.get('', (req, res) => {
    console.log('Get to INDEX succesfull');
    res.send('API works!');
})