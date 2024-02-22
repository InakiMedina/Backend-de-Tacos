const model1 = require('./../models/category');
const model2 = require('./../models/products');


module.exports = {
    find: (req, res) => {
        collection = req.baseUrl; // /category, /products, etc
        query = req.params.query;
        console.log(collection);
        if (collection == "/category") {
            model1.find(query).lean().then(response => {
                res.send(response)
            }).catch();
        } else if (collection == "/products") {
            model2.find(query).lean().then(response => {
                res.send(response)
            }).catch();
        } else {
            res.status(500).send('Not a valid URL path!')
        }
    }

}