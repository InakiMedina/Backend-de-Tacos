const userModel = require('../models/user')

module.exports = {

    createUser : async(req,res) => {
        console.log("here");
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
        
    }


}