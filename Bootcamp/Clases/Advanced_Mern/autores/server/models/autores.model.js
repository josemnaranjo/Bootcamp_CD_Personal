const mongoose = require('mongoose');

const AutoresSchema = new mongoose.Schema({
    nombreCompleto: {
        type: String,
        required: [true,"El nombre del autor es obligatorio"],
        minLength:[3,"El nombre no puede ser menor a 3 caracteres"] 
    },
}, {timestamps:true});

module.exports.Autores = mongoose.model('Autores', AutoresSchema);