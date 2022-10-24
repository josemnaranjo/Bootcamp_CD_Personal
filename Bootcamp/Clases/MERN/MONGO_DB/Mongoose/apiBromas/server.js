const express = require("express");
const app = express();
const mongoose = require('mongoose');



require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));


const AllMyUserRoutes = require("./server/routes/jokes.routes");
AllMyUserRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));
