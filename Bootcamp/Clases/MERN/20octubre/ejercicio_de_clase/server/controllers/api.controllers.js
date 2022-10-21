
const users = {
    id:2,
    nombre:"Sujeto",
    apellido:"Uno"
}



module.exports.addUser = (req,res)=>{
    console.log(req.body);
    res.json({mensaje:"usuario creado con exito"});
};


module.exports.getUserId = (req,res) => {
    console.log(req.params);
    res.json({userId:req.params.id});
};

module.exports.putNewInfo = (req,res)=>{
    let info = ({nombre:"Prueba1"});
    console.log(info);
    const {nombre} = req.body;
    info = {
        ...info,nombre
    }
    console.log(info);   
    res.json({mensaje:`Info es ahora ${info.nombre}`});
};

module.exports.deleteUser = (req,res)=>{
    console.log(users);
    const {id} = req.params;
    console.log(id);


    res.json({mensaje:"hola"});
}
