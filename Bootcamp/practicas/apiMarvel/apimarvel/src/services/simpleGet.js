import axios from "axios";


export const getAllCharacters = async ()=> {
    const data= await axios.get(`https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=8931d6074d89f06ad1e1510f574b3eb9&hash=be337c8fd749fdf9213000e4d0f35011
    `);
    console.log(data.data)
    return data.data.data.results;
}

