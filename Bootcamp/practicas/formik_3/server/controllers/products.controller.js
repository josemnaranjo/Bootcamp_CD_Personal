const {Product} = require('../models/productos.model');

module.exports.createProduct = (req,res)=>{
    const {nombre,descripcion,cantidad} = req.body;
    Product.create({
        nombre,descripcion,cantidad
    })
    .then(product=>res.json({message:product}))
    .catch(err=>res.status(400).json(err))
}

module.exports.findAllProducts = (req,res)=>{
    Product.find({})
        .then(products=>res.json({products}))
        .catch(err=>res.status(400).json(err))
}

module.exports.findOneProduct = (req,res)=>{
    Product.findById({_id:req.params.id})
        .then(product=>res.json({message:product}))
        .catch(err=>res.status(400).json(err))
}

module.exports.editOneProduct = (req,res)=>{
    Product.findByIdAndUpdate({_id:req.params.id},req.body,{new:true})
        .then((product)=>res.json({message:product}))
        .catch(err=>res.status(400).json(err))
}

module.exports.deleteOne = (req,res)=>{
    Product.deleteOne({_id:req.params.id})
        .then(result=>res.json(result))
        .catch(err=>res.status(400).json(err))
}