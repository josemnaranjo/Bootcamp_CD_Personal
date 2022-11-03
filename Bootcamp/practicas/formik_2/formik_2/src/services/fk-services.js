import axios from 'axios';

export const createUser = async(user)=>{
    try{
        const newUser = await axios.post('http://localhost:8000/api/new/create', user);
        return newUser.data
    }catch(err){
        console.log("Tuvimos un problema con llevar los datos a la Base de Datos" ,err)
    }
}