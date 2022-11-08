const mongoose = require('mongoose');

const NotasSchema = new mongoose.Schema({
    rating:{
        type: Number,
        required: [true,"El rating es un campo obligatorio"]
    },
    comentario: {
        type:String,
        required:[true,"El comentario es obligatorio "]
    },
    nombreCreador:{
        type:String,
        require:[true,"El nombre es obligatorio"]
    }
})

module.exports.Notas = mongoose.model("Notas",NotasSchema)