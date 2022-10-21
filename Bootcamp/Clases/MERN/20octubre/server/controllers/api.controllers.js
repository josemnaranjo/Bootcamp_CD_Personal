
//creo la funcion que va a responder para la determinada direccion
//req es lo que me envian, res es lo que yo respondo
module.exports.greeting = (req,res) => {
    //respondo con un mensaje
    res.json({message: "hola mundo!"});
};

module.exports.addUsers = (req,res)=>{
    //body es donde viajará la información que envia el usuario
    console.log(req.body);
    if(req.body.age < 18){
        res.status(403).json({mensaje: 'Necesitas ser mayor de edad para registrarte'});
    }
    res.json({mensaje:'usuario creado exitosamente'});
}

module.exports.getUser = (req,res)=>{
    console.log(req.params);
    res.json({userId:req.params.id});
}