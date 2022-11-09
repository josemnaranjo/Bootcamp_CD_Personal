const {Autores} = require('../models/autores.model');

module.exports.create = (req,res)=>{
    const {nombreCompleto} = req.body;
        Autores.create({nombreCompleto})
        .then(autor=> res.json({message:"Se ha creado un nuevo autor", autor:autor}))
        .catch(err=>res.status(400).json(err))
}

module.exports.findAll = (req,res)=>{
    Autores.find({})
        .then(autores=>res.json({message:"Exito",autores:autores}))
        .catch(err=>res.status(404).json({message:"",errors:err}))
}

module.exports.findOne =  (req,res)=>{
    Autores.findById({_id:req.params.id})
        .then(autor=>res.json({message:"Exito",autor:autor}))
        .catch(err=>res.status(400).json({message:"",errors:err}))
}

module.exports.findOneAndUpdate = (req,res)=>{
    Autores.findByIdAndUpdate({_id:req.params.id},req.body,{new:true, runValidators:true})
        .then(updatedAutor=>res.json({message:"Exito",updatedAutor:updatedAutor}))
        .catch(err=>res.status(400).json(err))
}

module.exports.deleteOne = (req,res)=>{
    Autores.deleteOne({_id:req.params.id})
        .then(response=>res.json({message:"Exito",response:response}))
        .catch(err=>res.status(400).json({message:"",errors:err}))
}
