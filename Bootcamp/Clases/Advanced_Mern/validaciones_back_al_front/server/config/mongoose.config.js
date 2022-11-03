const mongoose =require('mongoose');

mongoose.connect('mongodb://localhost/validations', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=> console.log("Conexión establecida con base de datos"))
    .catch((err)=>console.log("Ups, algo salió mal al momento de conectarse con la base de datos",err))