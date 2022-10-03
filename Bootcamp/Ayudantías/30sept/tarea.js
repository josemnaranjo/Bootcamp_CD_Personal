//Desafio: crear funcion que permita ordenar un arreglo recibiendo 3 parametros (arreglo,propiedad por la que se desea ordenar, tipo de ordenamiento)

const pokemones = ([
    { id: 5, name: "Charmeleon", types: ["fire"], power:30 },
    { id: 9, name: "Blastoise", types: ["water"], power:35 },
    { id: 12, name: "Butterfree", types: ["bug", "flying"], power:10 },
    { id: 16, name: "Pidgey", types: ["normal", "flying"], power:15 },
    { id: 23, name: "Ekans", types: ["poison"], power:18 },
    { id: 25, name: "Pikachu", types: ["electric"], power:40 },
    { id: 24, name: "Arbok", types: ["poison"], power:27 },
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
    { id: 1, name: "Bulbasaur", types: ["poison", "grass"], power:25 },
  ]);

const animales = ["perro","gato","chancho","delfin"];

function comparaPkmPorNombre (array,propiedad, typeOfOrder) {
   const aux = array.sort((a,b)=>{
    if(typeOfOrder === "asc") {
        if(a.propiedad<b.propiedad) return -1
        if(a.propiedad>b.propiedad) return 1
        return 0
    }
    if (typeOfOrder === "desc"){
        if(a.propiedad<b.propiedad) return 1
        if(a.propiedad>b.propiedad) return -1
        return 0
    }
   });
}


console.log(comparaPkmPorNombre(pokemones,"name","asc"));





//Ascendente
// if(a<b) return -1
//     if(a>b) return 1
//     return 0