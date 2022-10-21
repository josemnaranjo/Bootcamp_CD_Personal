const mongoose = require("mongoose");


//creación de la estructura que tendrá cada documento guardado en la colección
const UserSchema = new mongoose.Schema({
	name: String,
	age: Number
});

//con mongoose.model, exportamos una función constructura para nuevos objetos en esta colección
//y la pasamos a una constante para poder exportarla (línea 14)
const User = mongoose.model("User", UserSchema);

module.exports = User;