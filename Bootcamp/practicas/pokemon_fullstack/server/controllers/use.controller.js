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

module.exports.Login = async(req,res) =>{
    try{
        const user = await User.findOne({email:req.body.email});

        //validacion para saber si el usuario existe
        if(user===null){
            return res.json({errors:{error:{message:"El usuario no existe en la base de datos"}}})
        }

        //si la contraseña ingresada es correcta
        if(req.body.password!==user.password){
            return res.json({errors:{error:{message:"La contraseña es incorrecta"}}})
        }

        //generamos un token de usuario, cuando las dos validaciones anteriores son exitosas
        const userToken = jwt.sign({id:user._id},process.env.SECRET_KEY);

        //almacenamos el token en una cookie
        return res.cookie("userToken",userToken,process.env.SECRET_KEY,{httpOnly:true})
                .json({message:"",email:user.email,_id:user._id})

    }catch(err){
        res.json({message:"Algo salió mal",errors:err.errors})
    }
}

module.exports.Logout = async(req,res) =>{
    try{
        res.clearCookie('userToken');
        res.json({success:true})

    }catch(err){
        return({success:false,data:err.message})

    }
}


module.exports.getAll = (req,res) => {
    User.find({})
        .then((users)=>res.json(users))
        .catch((err)=>res.json(err))
}