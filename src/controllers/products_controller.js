const model = require('../models/products'); // Import the product model

module.exports = {
    find: async (req, res) => {
        const collection = req.baseUrl; // /category, /products, etc
        const query = req.query;
        console.log(collection);
        await model.find(query).lean().then(response => {
            res.send(response);
        }).catch(error => {
            console.error(error);
            res.status(500).send('Error while fetching data!');
        });
    },

    find_one: async (req, res) => {
        collection = req.baseUrl; // /category, /products, etc
        query = req.query;
        await model.findOne(query).lean().then(response => {
            res.send(response);
        }).catch(error => {
            console.error(error);
            res.status(500).send('Error while fetching data!');
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
