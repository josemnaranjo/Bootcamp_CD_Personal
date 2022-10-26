const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

//para agregar archivo config
require('./server/config/mongoose.config');

app.use(cors());

app.use(express.json(),express.urlencoded({extended:true}));

//para agregar el archivo de rutas
require('./server/person.routes')(app);



app.listen(port,()=>{console.log("Escuchando al puerto ",port)});
