const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pokemonesMongooseDB', {
    useNewUrlParser:true,
    useUnifiedTopology: true
})
    .then(()=>console.log("Conectado con exito a la base de datos"))
    .catch(err=>console.log(err))