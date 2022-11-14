const mongoose = require('mongoose');
const source = process.env.DB_LINK;

mongoose.connect(source,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(()=>console.log("Conexión con base de datos establecida"))
    .catch(err=>console.log("Problemas al conectarse con la base de datos ",err))