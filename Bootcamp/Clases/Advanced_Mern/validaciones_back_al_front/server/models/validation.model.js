const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title:{
        type:String,
        required: [
            true,"El titulo es un campo obligatorio"
        ]
    },
    numberOfPages: {
        type:Number,
        required:[
            true,"La cantidad de paginas es un campo obligatorio"
        ]
    }
},{timestamps:true})

module.exports.Book = mongoose.model('Book',BookSchema);