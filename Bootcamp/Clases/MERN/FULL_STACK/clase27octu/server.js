const express = require('express');
const app = express();
const port = 8000;



app.use(express.json(), express.urlencoded({extended:true}));



app.listen(port,console.log("Escuchando al puerto ",port))