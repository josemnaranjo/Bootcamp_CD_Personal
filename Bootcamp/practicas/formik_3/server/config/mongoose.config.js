const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/ferreteria',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(()=>console.log("La conexión con la base de datos se ha establecido"))
    .catch(err=>console.log("Algo salió mal al intertar conectarse con la base de datos", err))
