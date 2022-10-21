//aqui ponemos todos los endpoints que tendrá nuestra api


//importo la funcion
const { greeting, addUsers, getUser } = require("../controllers/api.controllers");


module.exports = (app)=>{
    //cuando la direccion sea "api/hola" llamará a la funcion greeting
    app.get('/api/hola', greeting);
    app.post('/api/user',addUsers);
    //para recibir información del usuario y queremos usar esta para devolver el user con ese Id en particular
    //en el fondo estoy enviando información
    app.get('/api/user/:id',getUser);
}