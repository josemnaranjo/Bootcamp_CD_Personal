const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
    nombre:{
        type:String,
        required:[true,"El nombre es obligatorio (back)"]
    },
    precio:{
        type:Number,
        required:[true,"El precio es obligatorio (back)"]
    },
    //aqui decimos que el producto va a tener un arreglo de id's de reviews, no los reviews completos. Será una referencia
    reviews:[{type:mongoose.Schema.Types.ObjectId,ref:"Review"}]
}, {timestamps:true})

const Product = mongoose.model("Product",ProductsSchema);

module.exports = Product;