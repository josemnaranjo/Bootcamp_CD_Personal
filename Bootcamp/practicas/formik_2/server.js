const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;


require('./server/config/mongoose.config');
require('./server/fk.routes')(app);

app.use(cors());

app.use(express.json(),express.urlencoded({extended:true}));

app.listen(port,()=>console.log("Escuchando al puerto ",port));

