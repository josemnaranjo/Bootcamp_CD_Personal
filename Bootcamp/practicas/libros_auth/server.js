const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const port = 8000;

require('./server/config/mongsoose.config');

app.use(cors({credentials:true, origin:'http://localhost:3000'}));
app.use(express.json(),express.urlencoded({extended:true}));


require('./server/routes/libros.routes')(app);






app.listen(port,()=>{console.log("Escuchando al puerto ",port)})

