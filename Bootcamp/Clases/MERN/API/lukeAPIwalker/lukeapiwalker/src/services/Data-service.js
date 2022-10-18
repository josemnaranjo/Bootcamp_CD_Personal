import axios from "axios";


export const getAllData = async (recurso,id)=> {
    const data= await axios.get(`https://swapi.dev/api/${recurso}/${id}`)
    console.log("desde servicio api",data);
    return data.data;
}
