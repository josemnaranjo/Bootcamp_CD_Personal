

let pokemones = [
    {
        id:1,
        nombre:"Pikachu",
        poder:47,
        salud:50
    },
    {
        id:2,
        nombre:"Charizard",
        poder:55,
        salud:60
    },
    {
        id:3,
        nombre:"Squirtle",
        poder:40,
        salud:70
    }
];

module.exports.getAllPokemones = (req,res)=>{
    res.json({pokemones:pokemones});
}

module.exports.createPokemon = (req,res)=>{
    console.log("BODY DE LA SOLICITUD ",req.body);
    pokemones.push(req.body);
    res.json({mensaje:"Se ha creado exitosamente el pokemon "+req.body.nombre});
}

module.exports.getPokemon = (req,res)=>{
    console.log("PARAMS EN URL ",req.params);
    const pokemonSelected = pokemones.filter(pokemon =>parseInt(req.params.id)  === pokemon.id);
    console.log(pokemonSelected[0]);
    res.json({pokemon:pokemonSelected});
}

module.exports.deletePokemon = (req,res)=>{
    const pokemonesRestantes = pokemones.filter(pokemon=> parseInt(req.params.id) !== pokemon.id);
    pokemones = pokemonesRestantes;
    res.json({pokemones:pokemones});
}

module.exports.editPokemon = (req,res)=>{
    const pokemonesAux = pokemones.map(pokemon=>parseInt(req.params.id)===pokemon.id? req.body : pokemon);
    pokemones = pokemonesAux;
    res.json({pokemones:pokemones});
}

//obtener el promedio de poder de los pkms del arreglo
module.exports.promedioPoder = (req,res)=>{
    let suma = 0;
    pokemones.map(pokemon=> pokemon.poder);
    res.json({promedio:suma/pokemones.length});
}

//Obtener el promedio del campo que se mande como query param
module.exports.promedio = (req,res)=>{
    //query es una nueva forma de enviar info, a través de get. Usar params en postman
    const tipoDePromedio = req.query.tipoDePromedio;
    let suma = 0;
    pokemones.map(pokemon=> pokemon[tipoDePromedio]);
    res.json({promedio:suma/pokemones.length});
}


//Dar un elixir a un pokemon, que afecte la salud
module.exports.darElixir = (req,res)=> {
    //recordar que filter va a entregar un arreglo, por eso ponemos corchete [0]
    const pokemonAfectado =  pokemones.filter(pokemon=>pokemon.id === parseInt(req.query.idPokemon))[0];
    pokemonAfectado[req.query.tipo]+= parseInt(req.query.efecto);
    const newPokemones = pokemones.map(pokemon=>pokemonAfectado.id===pokemon.id?pokemonAfectado:pokemon);
    pokemones = newPokemones;
    res.json({pokemones:pokemones})
}

//Atacar pokemones
module.exports.atacar = (req,res)=>{
    const atacante = pokemones.filter(pokemon=>pokemon.id === parseInt(req.query.idAtacante))[0];
    const defensor = pokemones.filter(pokemon=>pokemon.id === parseInt(req.query.idDefensor))[0];
    defensor.salud -= atacante.poder;
    const newPokemones = pokemones.map(pokemon=>pokemon.id ===defensor.id?defensor:pokemon);
    pokemones = newPokemones
    res.json({pokemones:pokemones})
}