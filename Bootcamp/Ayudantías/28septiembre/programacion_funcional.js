//Filter y map

const numeros = [2,4,10,25,33,55];

const mayoresA20 = numeros.filter((elemento,index) => {
    //console.log(index); //es como el iterador del for
    //console.log(numeros[index]);
    return elemento> 20; //aqui recibe un booleano, se testea si esta prueba es verdadera o falsa
});

// console.log(mayoresA20);

//Filter viene a reemplazar un for con un if dentro. Lo que voy a colocar dentro del if es lo que corresponde a la linea 8


//Map, recore uno a uno, y le agrega una funcion definida. Es como un "for" con una funcion definida para cada elemento. También recibe 3 elementos


const multiplicadorPor2 = numeros.map((elemento)=> elemento*2);

// console.log(multiplicadorPor2)


//concatenando filter con map. El que está más cerca del array es el que se ejecuta primero, se lee de izquierda a derecha.

const paresPor2 = numeros.filter((elemento)=> elemento % 2 === 0).map((elemento)=> elemento*2);

// console.log(paresPor2);

//ejercicio
const pokemones = Object.freeze([
    { id: 1, name: "Bulbasaur", types: ["poison", "grass"], power:25 },
    { id: 5, name: "Charmeleon", types: ["fire"], power:30 },
    { id: 9, name: "Blastoise", types: ["water"], power:35 },
    { id: 12, name: "Butterfree", types: ["bug", "flying"], power:10 },
    { id: 16, name: "Pidgey", types: ["normal", "flying"], power:15 },
    { id: 23, name: "Ekans", types: ["poison"], power:18 },
    { id: 24, name: "Arbok", types: ["poison"], power:27 },
    { id: 25, name: "Pikachu", types: ["electric"], power:40 },
    { id: 37, name: "Vulpix", types: ["fire"], power:30 },
    { id: 52, name: "Meowth", types: ["normal"], power:54 },
    { id: 63, name: "Abra", types: ["psychic"], power:32 },
    { id: 67, name: "Machamp", types: ["fighting"], power:29 },
    { id: 72, name: "Tentacool", types: ["water", "poison"], power:20 },
    { id: 74, name: "Geodude", types: ["rock", "ground"], power:21 },
    { id: 87, name: "Dewgong", types: ["water", "ice"], power:18 },
    { id: 98, name: "Krabby", types: ["water"], power:15 },
    { id: 115, name: "Kangaskhan", types: ["normal"], power:21 },
    { id: 122, name: "Mr. Mime", types: ["psychic"], power:12 },
    { id: 133, name: "Eevee", types: ["normal"], power:33 },
    { id: 144, name: "Articuno", types: ["ice", "flying"], power:60 },
    { id: 145, name: "Zapdos", types: ["electric", "flying"], power:70 },
    { id: 146, name: "Moltres", types: ["fire", "flying"], power:65 },
    { id: 148, name: "Dragonair", types: ["dragon"], power:55 },
  ]);

    //funcion que devuelva todos los pokemones con mayor poder a n

const getPkmPwrOverN = (n) => {
    return pokemones.filter((pokemon)=> pokemon.power>n);
}

console.table(getPkmPwrOverN(30));

//obtener un arreglo de objejos pokemon que son de tipo water o normal
const pkmWaterOrNormal = pokemones.filter((pokemon)=> pokemon.types.includes("water")|| pokemon.types.includes("normal"));


//obtener los 5 primeros elementos 
const primero5Elementos = pokemones.filter((pokemon,index)=>index<5);

console.table(primero5Elementos);

//un arrelgo con los nombres de todos los pkm ccon guion su poder. Ejemplo: pikachu - 30

const pkmAndPower = pokemones.map((pokemon)=> pokemon.name +" - "+pokemon.power);

// console.table(pkmAndPower);

//una funcion que devuelva todos los pkms que son mas debiles que uno entregado

const pknMasDebil = (pkmAComparar) => {
    return pokemones.filter((pokemon)=> pkmAComparar.power>pokemon.power);
}

const variablePokemon = { id: 87, name: "Dewgong", types: ["water", "ice"], power:18 }

console.table(pknMasDebil(variablePokemon));

//funcion que devuelva una matriz con objetos con nombre y poder de los pokemones cuyo poder es mayor poder al del entregado

const pokemonPoderoso = (poke) => {
    return pokemones.filter((pokemon)=> pokemon.power>poke.power).map((pokemon)=>({
        name:pokemon.name, 
        power:pokemon.power
    })); //entregamos una matriz con objetos
};

const pikachu = { id: 25, name: "Pikachu", types: ["electric"], power:40 }

console.log(pokemonPoderoso(pikachu));


//una matriz con solo los nombre de pokemon con una identificacion mayor que 99
const pkmMayor99 = pokemones.filter((pokemon)=>pokemon.id>99).map((pokemon)=>pokemon.name);

console.log(pkmMayor99);

//un objeto que contiene solo el primer tipo y el nombre de todos los pokemon cuyo segundo tipo es volador
const soloPrimerTipoDeVolador = pokemones.filter((p)=>p.types[1]==="flying").map((p)=>({
    name:p.name,
    primerTipo: p.types[0]
}))

console.log(soloPrimerTipoDeVolador);

//una matriz con solo los nombres del pokemon cuyo unico tipo es fuego y su poder mayor a 25
const pkmTypeFireAndPwrOver50 = pokemones.filter((p)=> p.types.length === 1 && p.types[0]==="fire" && p.power>25).map((p)=>p.name);

console.log(pkmTypeFireAndPwrOver50);