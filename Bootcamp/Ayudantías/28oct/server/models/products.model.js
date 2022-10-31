const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
    nombre:String,
    precio:Number
})

const Product = mongoose.model("Product",ProductsSchema);

module.exports = Product;