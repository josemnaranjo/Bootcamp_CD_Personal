const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    nombre:{
        type:String,
        required:[true,"Debe ingresar un nombre del producto"]
    },
    descripcion:{
        type:String,
        maxLenght:[10,"La descripcion no debe ser mayor a 10 caracteres"],
        required:[true,"Debe ingresar una breve descripcion del producto"]
    },
    cantidad:{
        type:Number,
        min:[0,"No puedes ingresar 0 productos al inventario"],
        max:[1000,"No puedes ingresar más de 1000 artículos de un solo producto al inventario"],
        required:[true,"Debe ingresar cantidad entre 1 y 999 de producto"]
    },

},{timestamps:true})

module.exports.Product = mongoose.model('Product',ProductSchema);
