const Product = require('../models/products.model');

module.exports.findAll = (req,res) =>{
    Product.find()
        .then((all) => res.json({productos:all}))
        .catch(err=>res.json({mensaje:"Algo salio mal ",err})) 
}

module.exports.create = (req,res)=>{
    Product.create(req.body)
    //le pasamos un mensaje vacío para que podamos usar un if en react, y así modificarlo a nuestro antojo
        .then((newProduct)=>res.json({message:"", product: newProduct}))
        //mandamos un error más definido
        .catch(err=>res.json({mensaje:"Algo salio mal ",error: err.errors})) 
}

module.exports.findOne = (req,res)=> {
    Product.findOne({_id:req.params.id})
        .then((product)=>res.json({product:product}))
        .catch(err=>res.json({mensaje:"Algo salio mal ",err})) 
}

module.exports.update = (req,res)=>{
    Product.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
        .then((product)=>res.json({product:product}))
        .catch(err=>res.json({mensaje:"Algo salio mal ",err})) 
}


module.exports.delete = (req,res)=>{
    Product.deleteOne({_id:req.params.id})
        .then((result)=>res.json(result))
        .catch(err=>res.json({mensaje:"Algo salio mal ",err}))
}