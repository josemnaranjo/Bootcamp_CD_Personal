const express = require('express');
const app = express();
const port = 8080;

//definimos que express use el formato json
app.use(express.json() );
//para traducir lo que viene en "body"
app.use(express.urlencoded({ extended:true}));

//aqui defino que reciba mis rutas
const apiRoutes = require('./server/routes/api.routes');

//envio la instancia del servidor
apiRoutes(app);


app.listen(port, ()=> console.log(`escuchando al puerto ${port}`));