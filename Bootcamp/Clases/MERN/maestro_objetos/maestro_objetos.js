const pokemon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);
    

//1.serie de objetos pokemon donde el id sea divisible por 3
const idDiv3 = pokemon.filter(p => p.id % 3 === 0);


//2.serie de objetos pokemon que osn del tipo "fuego"
const pFireType = pokemon.filter(p => p.types.includes("fire"));


//3.una variedad de objetos pokemon que tienen mas de un tipo
const pMoreThanOneType = pokemon.filter(p => p.types.length >= 2 );


//4.una matriz con solo los nombres de los pokemon
const pNames = pokemon.map(p => p.name);


//5.una matriz con solo los nombres de los pokemon con una id mayor a 99
const pNameWIddOver99 = pokemon.filter(p => p.id > 99).map(p => p.name);


//6.matriz con solo nombres de pokemon cuyo unico tipo es veneno
const pNameOnlyPoison = () => {
    //filtrar pkm con solo un tipo
    const pkmOneType = pokemon.filter(t => t.types.length<2);
    //filtrar pkm que solo tienen tipo poison
    const pkmOnlyPoison = pkmOneType.filter(p => p.types.includes("poison"));
    //crear matriz solo con los nombres 
    return pkmOnlyPoison.map(n => n.name);
}

//7. matriz que contiene solo el primer tipo de todos los pokemon cuyo segundo tipo es volador
const pTypeOnlySecondFly = () => {
    //seleccionar todos los pkm que tienen volador
    const pkmFly = pokemon.filter(f => f.types.includes("flying"));
    //matriz con el primer tipo 
    return pkmFly.map(f => f.types[0]);
}

//8.recuento de cantidad de pokemons que son del tipo normal
const pCountNormalType = () => {
    //seleccion de pkms con tipo normal
    const pkmNormalType = pokemon.filter(n => n.types.includes("normal"));
    //contar cuantos pkms hay en esta seleccion
    return pkmNormalType.length;
}




//Console log de resultados
console.log(idDiv3);
console.log(pFireType);
console.log(pMoreThanOneType);
console.log(pNames);
console.log(pNameWIddOver99);
console.log(pNameOnlyPoison());
console.log(pTypeOnlySecondFly());
console.log(pCountNormalType());