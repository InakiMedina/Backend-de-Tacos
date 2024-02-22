const model = require('../models/products');


module.exports = {
    GetProducts: async (req, res) => {
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
    GetProduct: async (req, res) => {
        id = req.query.id;
        await model2.findOne({
            _id: id
        }).lean().then(response => {
            res.send(response)
        }).catch(error => {
            console.error(error);
            res.status(500).send('Not a valid id!')
        });
    },
    DeleteProduct: async (req, res) => {
        let id = req.body.id;
        await model2.findByIdAndDelete({
            _id: id
        }).lean().then(response => {
            res.send(response)
        }).catch(error => {
            console.error(error);
            res.status(500).send('Not a valid id!')
        });
    }

}