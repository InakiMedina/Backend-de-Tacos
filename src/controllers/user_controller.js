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

    },
    updateUser: async (req, res) => {
        try {
            let userId = req.params.id;
            let userInfo = req.body;

            userModel.findByIdAndUpdate(userId, userInfo, { new: true }).then(updatedUser => {
                res.send(updatedUser);
            }).catch(err => {
                console.error(err);
                res.status(500).send("Error updating user");
            });
        } catch (err) {
            res.status(500).send(err);
        }
    },

    deleteUser: async (req, res) => {
        try {
            let userId = req.params.id;

            userModel.findByIdAndDelete(userId).then(() => {
                res.send("User deleted successfully");
            }).catch(err => {
                console.error(err);
                res.status(500).send("Error deleting user");
            });
        } catch (err) {
            res.status(500).send(err);
        }
    }


}