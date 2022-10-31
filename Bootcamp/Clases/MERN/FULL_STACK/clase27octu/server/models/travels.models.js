const mongoose = require('mongoose');

const travelSchema = new mongoose.Schema({
    packageName: {
        type: String,
        require: [true, "Este campo es obligatorio"],
        minlength: [3,"Este campo debe tener al menos 2 caracteres"]
    },
    destination: {
        type: String,
        require:[true,"Este campo es obligatorio"]
    },

    origin: {
        type: String,
        required: [true, "Debe ingresar un origen de viaje"],
        maxlength: [8, "El lugar de origen no puede tener más de 8 caracteres"]
    },

    price: {
        type: Number,
        required: [true, "Debe ingresar un precio de paquete"],
        min: [1, "El precio no puede tener más de 8 caracteres"]
    }, 

    arrive_date: {
        type: Date,
        required: [true, "Los paquetes tienen que tener fecha de llegada"]
    }

}, {timestamps:true});

module.exports.Travel = mongoose.model('Travel', travelSchema);
