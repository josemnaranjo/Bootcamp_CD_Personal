const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

app.use(cors());

require('./server/person.routes')(app);



app.listen(port,()=>{console.log("Escuchando al puerto ",port)});
