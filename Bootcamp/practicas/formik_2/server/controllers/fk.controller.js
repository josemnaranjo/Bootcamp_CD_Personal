const {Fk} =require('../models/fk.model');


module.exports.createUser = (req,res)=>{
    const {firstName,lastName,email,password,confirmPassword} = req.body

    Fk.create({
        firstName,
        lastName,
        email,
        password,
        confirmPassword
    })
    .then(user =>res.json(user))
    .catch(err=>res.json("Error al crear usuario ",err))
}
    