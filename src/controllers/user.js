const userModel = require('../models/user')

module.exports = {

    getUsers: async(req,res) => {
        try{
            userModel.find({}).lean().then(response =>{
                res.send(response)   
            })
        }
        catch(err){
            res.status(500).send('error listing user',err)
        }
    },

    createUser : async(req,res) => {
        try{
            
            let user = {
                firstName : req.body.firstName,
                lastName : req.body.lastName,
                email : req.body.email,
                password: req.body.password,
                type: req.body.type
            }
            console.log(user);
            userModel.create(user).then(result => {
                res.send(result);
            }).catch(err => {
                console.error(err);
                res.status(500).send("Error al adding movie");
            });

        }
        catch(err){
            return err
        } 
    },
    getUser : async(req,res) => {
        try{
            userModel.find({_id: req.params.id}).lean().then(response =>{
                res.send(response)   
            })
        }
        catch(err){
            res.send(err)
        }

    }


}