const {Schema,model} = require('mongoose');

const NotasSchema = new Schema({
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

const Notas = model('Notas',NotasSchema);

module.exports = {
    Notas,
    NotasSchema
}