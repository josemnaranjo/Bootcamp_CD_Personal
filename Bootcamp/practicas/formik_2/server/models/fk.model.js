const mongoose = require('mongoose');

const FkSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required: [
            true,"El nombre es obligatorio"
        ]
    },
    lastName: {
        type:String,
        required: [
            true,"El apellido es obligatorio"
        ]
    },
    email:{
        type:String,
        required: [
            true,"El correo electrónico es obligatorio"
        ]
    },
    password:{
        type:String,
        required: [
            true,"La contraseña es obligatoria"
        ]
    },
    confirmPassword:{
        type:String,
        required: [
            true,"La confirmación de la contraseña es obligatoria"
        ]
    }
},{timestamps:true});

module.exports.Fk = mongoose.model('Fk',FkSchema);