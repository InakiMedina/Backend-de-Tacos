const model = require('../models/products'); // Import the product model

module.exports = {

    GetProducts: async (req, res) => {
        collection = req.baseUrl; // /category, /products, etc
        query = req.query;
        console.log(collection);
        await model.find(query).lean().then(response => {
            res.send(response);
        }).catch(error => {
            console.error(error);
            res.status(500).send('Error while fetching data!');
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
    },

    // Method to create a new product
    createProduct: async (req, res) => {
        try {
            const newProduct = new model(req.body);
            const savedProduct = await newProduct.save();
            res.status(201).send(savedProduct);
        } catch (error) {
            console.error(error);
            res.status(400).send(error.message);
        }
    },

    // Method to update an existing product
    updateProduct: async (req, res) => {
        const { id } = req.params; // Extract the product ID from the URL
        const updates = req.body;
        try {
            const options = { new: true }; // Return the updated document
            const updatedProduct = await model.findByIdAndUpdate(id, updates, options);
            if (!updatedProduct) {
                return res.status(404).send('Product not found');
            }
            res.send(updatedProduct);
        } catch (error) {
            console.error(error);
            res.status(400).send(error.message);
        }
    }
};
