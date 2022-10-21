const express = require('express');
const app = express();
const port = 8000;

app.use(express.json(), express.urlencoded({extended:true}));



app.get("/api", (req,res)=>{
    res.json({mensaje:"Hola,estás accediendo al endpoint /api de la API"})
});

let pokemones = [
    {
        id:1,
        nombre:"Pikachu",
        poder:47
    },
    {
        id:2,
        nombre:"Charizard",
        poder:55
    },
    {
        id:3,
        nombre:"Squirtle",
        poder:40
    }
];

app.get("/api/pokemones",(req,res)=>{
    res.json({pokemones:pokemones});
});

app.post("/api/pokemon/new",(req,res)=>{
    console.log("BODY DE LA SOLICITUD ",req.body);
    pokemones.push(req.body);
    res.json({mensaje:"Se ha creado exitosamente el pokemon "+req.body.nombre});
});

app.get("/api/pokemon/:id",(req,res)=>{
    console.log("PARAMS EN URL ",req.params);
    //filtro donde obtenemos el pokemon que tiene el mismo id del params que le pasamos,
    //ojo que params.id es un string
    const pokemonSelected = pokemones.filter(pokemon =>parseInt(req.params.id)  === pokemon.id);
    console.log(pokemonSelected[0]);
    res.json({pokemon:pokemonSelected});
});


app.delete("/api/pokemon/:id",(req,res)=>{
    const pokemonesRestantes = pokemones.filter(pokemon=> parseInt(req.params.id) !== pokemon.id);
    pokemones = pokemonesRestantes;
    res.json({pokemones:pokemones});
});

app.put("/api/pokemon/:id", (req,res)=>{
    const pokemonesAux = pokemones.map(pokemon=>parseInt(req.params.id)===pokemon.id? req.body : pokemon);
    pokemones = pokemonesAux;
    res.json({pokemones:pokemones});
});





app.listen(port, () => console.log(`Api lanzada en puerto:  ${port}`));