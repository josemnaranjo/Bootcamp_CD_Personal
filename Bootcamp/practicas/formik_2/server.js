const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            
    optionSuccessStatus:200
}



require('./server/config/mongoose.config');
require('./server/fk.routes')(app);

app.use(cors(corsOptions));

app.use(express.json(),express.urlencoded({extended:true}));

app.listen(port,()=>console.log("Escuchando al puerto ",port));

