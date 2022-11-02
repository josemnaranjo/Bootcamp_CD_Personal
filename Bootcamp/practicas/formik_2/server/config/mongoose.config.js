const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/formik2',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(()=>console.log("Conexión con base de datos establecida"))
    .catch((err)=>console.log("Ups, algo salió mal con la conexión con la base de datos. Más info: ",err))