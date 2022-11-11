const {Notas} = require('../models/notas.model');
const {Pelicula} = require('../models/peliculas.model')


module.exports.createNota= async (req,res)=>{
    try{
        const {id}=req.params;
        const newNota = await Pelicula.findByIdAndUpdate(id,{
            $push:{
                notas:req.body
            }
        },{new:true});
        res.json(newNota)
    }catch(err){
        res.json(err)
    }
}

module.exports.getNoteFromPelicula= async (req,res)=>{
    try{
        const {id} = req.params;
        const pelicula = await Pelicula.findById(id)
        console.log("LOG DESDE NOTAS CONTROLLER - GET NOTE FROM PELICULA",pelicula)
        res.json({message:"",notas:pelicula.notas})
    }catch(err){
        res.json({message:"Algo salió mal",errors:err})
    }
}