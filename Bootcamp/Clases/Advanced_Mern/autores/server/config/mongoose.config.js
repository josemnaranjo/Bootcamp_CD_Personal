const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/autores',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(()=>console.log("Conexión con base de datos establecida"))
    .catch(err=>console.log("Problemas al conectarse con la base de datos ",err))