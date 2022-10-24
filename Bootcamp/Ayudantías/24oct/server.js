const express = require('express');
const app = express();
const port = 8000;

app.use(express.json(), express.urlencoded({extended:true}));


const routes = require("./server/routes")


app.listen(port, () => console.log(`Api lanzada en puerto:  ${port}`));