const model1 = require('./../models/category');
const model2 = require('./../models/products');


module.exports = {
    find: async (req, res) => {
        collection = req.baseUrl; // /category, /products, etc
        query = req.params.query;
        console.log(collection);
        if (collection == "/category") {
            query = {};
            await model1.find(query).lean().then(response => {
                console.log(response)
                res.send(response)
            }).catch(error => {
                console.error(error);
            });
        } else if (collection == "/products") {
            await model2.find(query).lean().then(response => {
                res.send(response)
            }).catch(error => {
                console.error(error);
            });
        } else {
            res.status(500).send('Not a valid URL path!')
        }
    }

}