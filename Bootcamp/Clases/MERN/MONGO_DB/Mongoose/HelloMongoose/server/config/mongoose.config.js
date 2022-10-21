const mongoose = require("mongoose");


//con este metodo nos conectamos a la base de datos que creamos para nuestra app
mongoose.connect("mongodb://localhost/name_of_your_DB", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("Established a connection to the database"))
	.catch(err => console.log("Something went wrong when connecting to the database", err));