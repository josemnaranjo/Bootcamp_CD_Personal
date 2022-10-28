const { response } = require('express');
const {Product} = require('../models/productAdm.model');


module.exports.createProduct = (req,res)=>{
    const {title,price,description} = req.body

    Product.create({
        title,
        price,
        description
    })
    .then(product => res.json(product))
    .catch(err=>res.json(err))
}

module.exports.getProducts = (req,res)=>{
    Product.find({})
        .then(products=>res.json(products))
        .catch(err=>res.json(err))
}

module.exports.getOneProduct = (req,res)=>{
    Product.findById(req.params.id)
        .then(product=>res.json(product))
        .catch(err=>res.json(err))
}

module.exports.getOneAndUpdate = (req,res)=>{
    Product.findByIdAndUpdate({_id:req.params.id},req.body,{new:true})
        .then(updatedProduct=>res.json(updatedProduct))
        .catch(err=>res.json(err))
}

module.exports.deleteOne = (req,res)=>{
    Product.deleteOne({_id:req.params.id})
        .then(deletedConfirmation=>res.json(deletedConfirmation))
        .catch(err=>res.json(err))
}