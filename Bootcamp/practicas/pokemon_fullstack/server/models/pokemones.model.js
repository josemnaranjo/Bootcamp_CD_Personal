const mongoose = require('mongoose');

const PokemonSchema = new mongoose.Schema({
    pokemon: {
        type: String,
        require: [true,"El nombre del pokemon es obligatorio"] 
    },
    entrenador: {
        type:String,
        require: [true,"El nombre del entrenador es obligatorio"]
    },
    tipos: {
        type:Array
    }
    
}, {timestamps:true});

module.exports.Pokemon = mongoose.model('Pokemon', PokemonSchema);