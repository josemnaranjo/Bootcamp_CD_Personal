const mongoose = require('mongoose');



mongoose.connect('mongodb://localhost/clase27oct',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>console.log("Conexión con base de datos establecida"))
    .catch(err=>console.log("Algo salió mal ", err))