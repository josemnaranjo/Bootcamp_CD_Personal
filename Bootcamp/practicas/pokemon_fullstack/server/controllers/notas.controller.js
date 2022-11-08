const {Notas} = require('../models/notas.model');
const {Pokemon} = require('../models/pokemones.model')


module.exports.createNota= async (req,res)=>{
    try{
      const {rating,comentario,idPokemon}=req.body;
      console.log(idPokemon)
      const nota = await Notas.create({rating,comentario,nombreCreador:"Nombre del usuario loggeado"});
      const pokemon = await Pokemon.findById(idPokemon).exec();
      pokemon.notas.push(nota);
      await pokemon.save();
      res.json(nota)
    }catch(err){
        res.json(err)
    }
}

module.exports.getNoteFromPokemon= async (req,res)=>{
    try{
        const {idPokemon} = req.params;
        const pokemon = await Pokemon.findById(idPokemon).populate("notas").exec()
        console.log("NOTAS SOBRE POKEMON",pokemon)
        res.json({message:"",notas:pokemon.notas})
    }catch(err){
        res.json({message:"Algo salió mal",errors:err})
    }
}