//creamos un modelo de datos para que la nueva informacion que llegue siga este esquema

const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    firstName: {type: String},
    lastName: {type:String}
}, {timestamps:true});

module.exports.Person = mongoose.model('Person',PersonSchema);