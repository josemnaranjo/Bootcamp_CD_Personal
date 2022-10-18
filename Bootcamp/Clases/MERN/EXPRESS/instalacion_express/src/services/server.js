const express =require("express");
const app = express();
const port = 8000;



//la primera parte ("/api") decimos que queremos manejar las solicitudes get en esta ruta en particular
//la segunda parte es el callback que queremos ejecutar cuando el navegador haga una solicitud a esta ruta
app.get("/api",(req,res)=>{
    //estamos enviando un archivo json
    res.json({mensaje:"hola mundo"})
});

//en esta linea ejecutamos el servidor en el puerto definido antes
//la primera variable es el puerto y la segunda el callback
app.listen(port, ()=> console.log(`Escuchando al puerto ${port}`))


//corremos el servidor tipiando en el servidor node server.js