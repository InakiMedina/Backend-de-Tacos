const model = require('../models/products');


module.exports = {
    find: async (req, res) => {
        collection = req.baseUrl; // /category, /products, etc
        query = req.query;
        console.log(collection);
        await model.find(query).lean().then(response => {
            res.send(response);
        }).catch(error => {
            console.error(error);
            res.status(500).send('Not a valid URL path!');
        });
    },

    find_one: async (req, res) => {
        collection = req.baseUrl; // /category, /products, etc
        query = req.query;
        await model2.findOne(query).lean().then(response => {
            res.send(response)
        }).catch(error => {
            console.error(error);
            res.status(500).send('Not a valid URL path!')
        });
    }

}