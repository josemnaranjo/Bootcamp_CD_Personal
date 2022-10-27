const { response } = require('express');
const {Product} = require('../modules/productAdm.model');


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