const {Book} = require('../models/validation.model');


module.exports.createBook = (req,res)=>{
    const {title,numberOfPages}= req.body
    Book.create({
        title,
        numberOfPages
    })
    .then(book=>res.json(book))
    .catch(err=> res.status(400).json(err))
}