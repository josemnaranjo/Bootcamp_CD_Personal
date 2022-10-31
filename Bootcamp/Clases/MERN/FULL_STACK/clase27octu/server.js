const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;

app.use(cors());


app.use(express.json(), express.urlencoded({extended:true}));
require('./server/config/mongoose.config');

require('./server/travels.routes')(app);


app.listen(port,console.log("Escuchando al puerto ",port))