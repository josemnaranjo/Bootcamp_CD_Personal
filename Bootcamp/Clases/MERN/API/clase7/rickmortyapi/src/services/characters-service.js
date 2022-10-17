// const axios = require('axios').default;
import axios from "axios";

//funcion asincrona que espera el resultado (await) del llamado a la api
export const getAllCharacters = async ()=> {
    const characters = await axios.get('https://rickandmortyapi.com/api/character')
    console.log(characters);
    //siempre axios va a traer un json que está en el objeto "Data"
    return characters.data;
}

export const getOneCharacter = async(url)=> {
    const character = await axios.get(url);
    console.log("Return de servicio character", character);
    return character.data
}