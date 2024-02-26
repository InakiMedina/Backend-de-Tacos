const Table = require('../models/table.model');

class tablesController {
    getTables(req, res){
        Table.find().then(response => {
            res.send(response);
        }).catch(error => {
            res.status(404).send(error);
        });
    }

    getTable(req, res){
        const tableId = req.params.id;

        Table.findById(tableId).then(response => {
            res.send(response);
        }).catch(error => {
            res.status(404).send(error);
        });
    }

    createTable(req, res){
        const table = {
            tableNumber : req.body.tableNumber,
            status : req.body.status,
            waiter : req.body.waiter
        }

        Table.create(table).then(response => {
            res.send(response);
        }).catch(error => {
            res.status(404).send(error);
        });
    }

    updateTable(req, res){
        const tableId = req.params.id;

        const table = {
            tableNumber : req.body.tableNumber,
            status : req.body.status,
            waiter : req.body.waiter
        };

        Table.findByIdAndUpdate(tableId, table).then(response => {
            res.send(response);
        }).catch(error => {
            res.status(404).send(error);
        });
    }

    deleteTable(req, res){
        const tableId = req.params.id;

        Table.findByIdAndDelete(tableId).then(response => {
            res.send(response);
        }).catch(error => {
            res.status(404).send(error);
        })
    }

    assignWaiter(req, res){
        const tableId = req.params.id;
        const {waiterId} = req.body;

        Table.findByIdAndUpdate(tableId, waiterId).then(response => {
            res.send(response);
        }).catch(error => {
            res.status(404).send(error);
        });

    }
};

module.exports = new tablesController();