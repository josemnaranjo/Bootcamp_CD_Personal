const {Pelicula} = require('../models/peliculas.model');
const {Notas} =require('../models/notas.model');

module.exports.createPelicula = async (req,res)=>{
    try{
        const {titulo, duracion,actores, fechaDeEstreno, rating,comentario} = req.body;
        const nota = new Notas({rating,comentario,nombreCreador:"Nombre de usuario"});
        const pelicula = new Pelicula({titulo,duracion,actores,fechaDeEstreno});
        pelicula.notas.push(nota);
        await nota.save();
        await pelicula.save();
        res.json({message:"",pelicula:pelicula,nota:nota})
    }catch(err){
        res.json({message:"Algo ha salido mal",errors:err.errors})
    }
}


module.exports.getAllPeliculas = async (req,res)=>{
    try{
        const peliculas = await Pelicula.aggregate([
            {
                $project:{
                titulo:'$titulo',
                duracion:'$duracion',
                actores:'$actores',
                fechaDeEstreno:'$fechaDeEstreno',
                ratingAvg:{$avg:'$notas.rating'}
                }
            },
        ])
        res.json(peliculas)

    }catch(err){
        res.status(500).json(err)
    }
}

// module.exports.getAllPeliculas = (req,res)=>{
//     Pelicula.find({})
//         .then(pelicula=>res.json(pelicula))
//         .catch(err=>res.status(404).json(err))
// }

module.exports.findOnePelicula = (req,res)=>{
    Pelicula.findById({_id:req.params.id})
        .then(pelicula=>res.json(pelicula))
        .catch(err=>res.status(404).json(err))
}

// module.exports.deletePelicula = (req,res)=>{
//     Pelicula.deleteOne({_id:req.params.id})
//         .then(confirmation=>res.json(confirmation))
//         .catch(err=>res.status(400).json(err))
// }

module.exports.updatePelicula = (req,res)=>{
    Pelicula.findByIdAndUpdate({_id:req.params.id},req.body,{new:true, runValidators:true})
        .then(updatedPelicula=>res.json(updatedPelicula))
        .catch(err=>res.status(404).json(err))
}