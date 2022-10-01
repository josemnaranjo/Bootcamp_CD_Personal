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


//DESESTRUCTURACION: PASAR DATOS DE UN ARRAY U OBJETO A UNA VARIABLE

//1. obtener segundo dato del arreglo pokemones

const [ ,segundoPkm] = pokemones;

console.log("Segundo pokemon: ", segundoPkm);

//2. obtener tercer y cuarto dato del arreglo pkmnes

const [ , , tercerPkm, cuartoPkm] = pokemones;

console.log("Tercer y cuarto pokemon: ", tercerPkm,cuartoPkm);

//3. obtener tercer y el resto de los pokemones del arreglo pkmnes

const [ , , terPkm, ...restodePkmns] = pokemones;

console.log("Tercer pokemon: ",terPkm,"Resto de pokemones:", restodePkmns);


//DESESTRUCTURAR UN ARREGLO DE OBJETOS

//obtener el poder del segundo pokemon

const [ , {power}] = pokemones;

console.log("El poder del segundo pokemon es:",power);

//Si queremos objetener el poder del tercer pokemon, tenemos que renombrar la variable que lo va a contener

const [ , ,{power:powerTercerPkm}] = pokemones;

console.log("El poder del tercer pokemon es", powerTercerPkm);


//DESESTRUCTURANDO UN OBJETO CON ARREGLOS

const josemaria = {
    nombre:"Josemaria",
    Apellido: "Naranjo",
    rut:173530150,
    direcciones: [{
        direccion: "Americo Vespucio sur, 1919",
        ciudad: "Santiago",
    }, {
        direccion:"El Retiro 147",
        ciudad:"Quilpué"
    }]
};

//Obtener el rut
const {rut} = josemaria;
console.log("El rut de Josemaria es:",rut);

//Obtener todas las direcciones de Josemaria

const {direcciones: [direccionUno,direccionDos]} = josemaria;

console.log("Las direcciones de josemaria son:", direccionUno, direccionDos);

//Obteniendo la ciudad de la segunda direccion

const {direcciones:[ ,{ciudad:ciudadDos}]}= josemaria;

console.log("La ciudad de la segunda direccion de Josemaria es:",ciudadDos);
