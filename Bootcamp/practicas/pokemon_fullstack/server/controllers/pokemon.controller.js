const {Pokemon} = require('../models/pokemones.model');
const {Notas} =require('../models/notas.model');

module.exports.createPokemon = (req,res)=>{
    Pokemon.create({
        pokemon:req.body.pokemon,
        entrenador: req.body.entrenador,
        tipos: req.body.tipos
    })
    .then(pokemon=>res.json(pokemon))
    .catch(err=>res.status(400).json(err))
}

module.exports.createPokemonWithNotes = async (req,res)=>{
    try{
        const {pokemon, entrenador,tipos,rating,comentario} = req.body;
        const nota = new Notas({rating,comentario,nombreCreador:"Nombre de usuario"});
        const pkn = new Pokemon({pokemon,entrenador,tipos});
        pkn.notas.push(nota);
        await nota.save();
        await pkn.save();
        res.json({message:"",pokemon:pkn,nota:nota})
    }catch(err){
        res.json({message:"Algo ha salido mal",errors:err.errors})
    }
}

module.exports.catchThemAll = (req,res)=>{
    Pokemon.find({})
        .then(pokemones=>res.json(pokemones))
        .catch(err=>res.status(404).json(err))
}

module.exports.findOnePokemon = (req,res)=>{
    Pokemon.findById({_id:req.params.id})
        .then(pokemon=>res.json(pokemon))
        .catch(err=>res.status(404).json(err))
}

module.exports.deletePokemon = (req,res)=>{
    Pokemon.deleteOne({_id:req.params.id})
        .then(confirmation=>res.json(confirmation))
        .catch(err=>res.status(400).json(err))
}

module.exports.updatePokemon = (req,res)=>{
    Pokemon.findByIdAndUpdate({_id:req.params.id},req.body,{new:true, runValidators:true})
        .then(updatedPkm=>res.json(updatedPkm))
        .catch(err=>res.status(404).json(err))
}