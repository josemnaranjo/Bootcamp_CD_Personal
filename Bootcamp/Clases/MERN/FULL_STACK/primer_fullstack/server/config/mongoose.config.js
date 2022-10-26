const mongoose = require('mongoose');


//conectamos nuestro server con la base de datos a través de mongoose
mongoose.connect('mongodb://localhost/crmdb', {
    useNewUrlParser : true,
    useUnifiedTopology: true,
})
    .then(()=>console.log("Conexión con base de datos establecida"))
    .catch(err=>console.log("Algo salió mal ",err))