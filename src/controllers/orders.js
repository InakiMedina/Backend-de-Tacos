const order = require('../models/order');

class ordersController {
    getOrder(req, res) {
        const id = req.params.id;

        order.findById(id).then(response => {
            res.send(response);
        }).catch(e => {
            res.status(404).send('Not found');
        })
    };

    getOrders(req, res) {
        order.find().then(response => {
            res.send(response);
        }).catch(e => {
            res.status(404).send('Not found');
        })
    };

    createOrder(req, res) {
        const data = {
            waiter: req.body.waiter,
            table: req.body.table,
            date: req.body.date,
            customerCount: req.body.customerCount,
            //orderProducts: req.body.orderProducts,
            total: req.body.total,
            type: req.body.type,
            status: req.body.status
        }

        order.create(data).then(response => {
            res.send('order created');
        }).catch(e => {
            res.status(400).send('Bad request');
        })
    };

    updateOrder(req, res) {
        const id = req.params.id;

        const data = {
            waiter: req.body.waiter,
            table: req.body.table,
            date: req.body.date,
            customerCount: req.body.customerCount,
            orderProducts: req.body.orderProducts,
            total: req.body.total,
            type: req.body.type,
            status: req.body.status
        }

        order.findByIdAndUpdate(id, data, {new : true}).then(response => {
            res.send(response);
        }).catch(e => {
            res.status(400).send('Bad request');
        })
    };

    cancelOrderProduct(req, res) {
        const id = req.params.id;
        const productId = req.params.productId;

        order.findById(id).then(response => {
            let orderProducts = response.orderProducts;
            let index = orderProducts.findIndex(x => x.id === productId);
            orderProducts[index].status = 'cancelled';

            order.findByIdAndUpdate(id, {orderProducts: orderProducts}, {new : true}).then(response => {
                res.send(response);
            }).catch(e => {
                res.status(400).send('Bad request');
            })
        }).catch(e => {
            res.status(404).send('Not found');
        })
    };

    calculateTotal(req, res) {
        const total = 0;
        const id = req.params.id;

        order.findById(id).then(response => {
            let orderProducts = response.orderProducts;
            orderProducts.forEach(element => {
                total += element.quantity;
            });

            order.findByIdAndUpdate(id, {total: total}, {new : true}).then(response => {
                res.send(response);
            }).catch(e => {
                res.status(400).send('Bad request');
            })
        }).catch(e => {
            res.status(404).send('Not found');
        })

    };

    splitCount(req, res) {
        const id = req.params.id;


    };

    payOrder(req, res) {

    };
}

module.exports = new ordersController();