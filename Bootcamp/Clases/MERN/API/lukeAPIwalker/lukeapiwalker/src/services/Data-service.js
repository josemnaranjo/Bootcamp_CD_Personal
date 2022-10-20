import axios from "axios";


export const getAllData = async (recurso,id)=> {
    const data= await axios.get(`https://swapi.dev/api/${recurso}/${id}`)
    console.log("desde servicio api",data);
    return data.data;
}

export const getCharacter = async(id)=>{
    const charater = await axios.get(`https://swapi.dev/api/people/${id}`)
    console.log("desde data-service,getCharacter: ",charater.data);
    return charater.data;
}

// export const getHomeWorld = async(url)=>{
//     const homeWorld = await axios.get(url)
//     console.log("desde data-service,getHomeWorld: ",homeWorld.data);
//     return homeWorld.data;
// }