const {Product} = require('../models/productos.model');

module.exports.createProduct = (req,res)=>{
    const {nombre,descripcion,cantidad} = req.body;
    Product.create({
        nombre,descripcion,cantidad
    })
    .then(product=>res.json({message:product}))
    .catch(err=>res.json({message:err}))
}

module.exports.findAllProducts = (req,res)=>{
    Product.find({})
        .then(products=>res.json({message:products}))
        .catch(err=>res.json({message:err}))
}