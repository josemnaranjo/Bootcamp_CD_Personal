const {Fk} =require('../models/fk.model');


module.exports.createUser = (req,res)=>{
    Fk.create(req.body)
    .then(user =>res.json(user))
    .catch(err=>res.json({message:"Error", errors: err}))
}

module.exports.findAll = (req,res)=>{
    Fk.find()
        .then(users=>res.json(users))
        .catch(err=>res.json(err))
}