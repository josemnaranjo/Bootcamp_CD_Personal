//Rest y spread: Ambos usan ... como operador

//REST permite encapsular el resto de algunos valores especificos suministrados por el usuario en un arreglo

const pokemones = [
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
];

//Capturando el resto de los pokemones

const [ ,...restOfPkm] = pokemones;

//se loguean todos los pokemones menos el primero
console.log(restOfPkm); 

//Tambien podemos usarlo para funciones. lo agrupado se devolverá como un array

const restFun = (nombre,apellido,...restoDeDatos) => {
    return restoDeDatos
}

console.log(restFun("Javiera","Montenegro", "Avenida Casita 123", "Ñuñoa","Le gusta el pan"));

//Spread expande los iterables en elementos individuales 

const spreadFun = (nombre,apellido,empresa) =>{
    return `${nombre} ${apellido} trabaja en ${empresa}`
}

//En este caso expande a cada parametro los elementos que estan en el arreglo
console.log(spreadFun(...["Javiera","Montenegro","Del Carpio"]));

//Por definicion los objetos no son iterables per se, por lo que no cabria decir que los elementos que este contiene se puede expandir, 
//pero podemos hacer lo siguiente

const nombreJavi = { nombre: "Javiera", apellido:"Montenegro"}
const bioJavi = {...nombreJavi, trabajo:"Del Carpio"};

//podemos usar spread para agregar los elementos de un objeto a otro objeto

console.log(nombreJavi);
console.log(bioJavi);






