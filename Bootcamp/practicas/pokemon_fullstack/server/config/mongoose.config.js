const mongoose = require('mongoose');

mongoose.connect(process.env.DB_LINK,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(()=>console.log("Conexión con base de datos establecida"))
    .catch(err=>console.log("Problemas al conectarse con la base de datos ",err))