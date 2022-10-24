const mongoose = require("mongoose");



const JokeSchema = new mongoose.Schema({
	setup:{
        type:String,
        require:[true,"Obligatorio"],
        minlength: [10,"El setup debe ser de al menos 10 caracteres de largo"]
    },
	punchline: {
        type:String,
        require:[true,"Obligatorio"],
        minlength: [3,"El setup debe ser de al menos 3 caracteres de largo"]
    }
});




const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;