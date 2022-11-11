const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;


app.use(cors());
app.use(express.json(),express.urlencoded({extended:true}));

require('./server/config/mongoose.config');
require('./server/routes/routes')(app);






app.listen(port,()=>{console.log("Escuchando al puerto ",port)})

