//permite llamar endpoint solo cuando el usuario este loggeado

const jwt = require('jsonwebtoken');

const authenticate = (req,res,next) => {
    try{
        //nos traemos el token que está almacenado en la cookie
        const jwtToken = req.cookies.userToken;
        jwt.verify(jwtToken,process.env.SECRET_KEY,(err)=>{
            if(err){
                return res.status(401).json({verified:false})
            }else{
                next();
            }
        })
    }catch(err){
        return res.sendStatus(500);
    }
}

module.exports = authenticate;