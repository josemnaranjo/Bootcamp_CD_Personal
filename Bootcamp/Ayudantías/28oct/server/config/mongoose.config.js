const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/productsAyudantia', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(()=>console.log("Conexion con base de datos establecida"))
    .catch(err=>console.log("Ups, algo salió mal ", err))