const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/productdbCD', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(()=>console.log("Conexion con base de datos establecida"))
    .catch(err=>console.log("Ups, algo salió mal ", err))