//Reduce

const numeros = [20,10,40,17];

let total = 0;
const sumaConReduce = numeros.reduce((acu,item) => acu + item);


//en la primera iteracion, acc va a guardar el primer elemento del arreglo, sumand el segundo elemento a 20;
//en la segunda iteracion, acc va a tener el 20 en él. Y le sumara el siguiente elemento

console.log(sumaConReduce);

//Tareas

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



//obtener un objeto en donde se guarde cuantos pkms hay de cada tipo

const cuantosCadaTipo = pokemones.reduce((acu,item)=>{
    item.types.map((tipo)=>{
        acu[tipo] = (acu[tipo]|| 0) + 1;
    })
    return acu;
},{})

console.log(cuantosCadaTipo);
//si no indicamos el valor con el que parte reduce, acumulado tomará el primer valor del arreglo

//Obtener la suma total de poder por cada tipo
const poderCadaTipo = pokemones.reduce((acu,item)=>{
    item.types.map((tipo)=>{
        acu[tipo] = (acu[tipo]|| 0) + item.power;
    })
    return acu;
},{})

console.log(poderCadaTipo);

//obtener un objeto en el que aparezca por cada tipo, un arrelgo con los pokemones de este tipo

const cadaTipo = pokemones.reduce((acu,item)=>{
    item.types.map((tipo)=>{
        acu[tipo]?acu[tipo] = [...acu[tipo],item]:acu[tipo] = [item];
    })
    return acu
},{})

console.log(cadaTipo);

//.sort 
//recibe un callback que compara los elementos de un arreglo

let numbers = [0,6,10,22,3,45];

function compare(a,b){
    //si return de comapre es < a 0, el sort va a colocar al elemento a antes que el elemento b
    //si return es > a 0, sort va a colocar el elemento a despues que el b
    //si return es 0, sort no modifica posicion

    if(a<b) return -1
    if(a>b) return 1
    return 0
}

function compare2(a,b){
    return a-b
}


console.log(numbers.sort(compare2));


const animales = ["gato", "perro", "tortuga","elefante", "jirafa"];

console.log(animales.sort(compare));

//las mayusculas vienen antes que las minusculas

//Desafio: crear funcion que permita ordenar un arreglo recibiendo 3 parametros (arreglo,propiedad por la que se desea ordenar, tipo de ordenamiento)


