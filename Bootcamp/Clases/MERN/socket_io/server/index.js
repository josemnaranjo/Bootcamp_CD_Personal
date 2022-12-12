const express = require('express');
const socket = require('socket.io');
const cors = require('cors');

 
const app = express();


app.listen(8000,()=>{
    console.log("SERVIDOR CORRIENDO")
})
