const mongoose = require('mongoose');
const {NotasSchema} = require('./notas.model');

const PeliculaSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: [true,"El título de la pelicula es obligatorio"],
        minLength: [1,"Debes ingresar un nombre mayor a 1 caracter"] 
    },
    duracion: {
        type:Number,
        required: [true,"La duración es obligatoria"],
    },
    actores: {
        type:Array,
        required: [true,"Debes ingresar al menos 1 actor"],
    },
    fechaDeEstreno: {
        type: Date,
        required: [true,"Por favor ingresa una fecha de estreno"]
    },
    notas: [NotasSchema]
    
}, {timestamps:true});

module.exports.Pelicula = mongoose.model('Pelicula', PeliculaSchema);