const {Product} = require('../modules/productAdm.model');


module.exports.createProduct = (req,res) =>{
    const {title,price,description} = req.body

    Product.create({
        title,
        price,
        description
    })
    .then(product => res.json(product))
    .catch(err=>res.json(err))
}