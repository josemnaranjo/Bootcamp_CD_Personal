const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const cookieParser = require('cookie-parser');
const port = 8000;


app.use(cookieParser());
app.use(cors({credentials:true, origin:'http://localhost:3000'}));
app.use(express.json(),express.urlencoded({extended:true}));

require('./server/config/mongoose.config');
require('./server/routes/pokemon.routes')(app);






app.listen(port,()=>{console.log("Escuchando al puerto ",port)})

