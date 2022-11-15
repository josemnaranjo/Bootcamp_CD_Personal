const {User} = require('../models/user.model');
const jwt = require("jsonwebtoken");

module.exports.Register = async(req,res) => {
    try{
        const user = new User(req.body);
        await user.save();

        const jwtToken = jwt.sign({_id:user._id},process.env.SECRET_KEY);
        
        return res.cookie("userToken",jwtToken,process.env.SECRET_KEY,{httpOnly:true})
                .json({message:"",email:user.email,_id:user._id})
    }catch(err){
        res.json({message:"Algo salió mal",errors:err.errors})
    }
}

module.exports.getAll = (req,res) => {
    try{
        const allUsers = User.find({})
        res.json(allUsers)

    }catch(err){
        res.json({message:"Algo salió mal",errors:err.errors})
    }
}