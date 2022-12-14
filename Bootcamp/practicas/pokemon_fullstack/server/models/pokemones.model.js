const mongoose = require('mongoose');

const PokemonSchema = new mongoose.Schema({
    pokemon: {
        type: String,
        required: [true,"El nombre del pokemon es obligatorio"] 
    },
    entrenador: {
        type:String,
        required: [true,"El nombre del entrenador es obligatorio"]
    },
    tipos: {
        type:Array
    },
    notas: [{type:mongoose.Schema.Types.ObjectId,ref:"Notas"}]
    
}, {timestamps:true});

module.exports.Pokemon = mongoose.model('Pokemon', PokemonSchema);