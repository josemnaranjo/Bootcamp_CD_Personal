const mongoose = require('mongoose');

const PokemonSchema = new mongoose.Schema({
    nombre:{type:String},
    poder:{type:Number}
});


const Pokemon = mongoose.model("Pokemon", PokemonSchema);

module.exports = Pokemon;