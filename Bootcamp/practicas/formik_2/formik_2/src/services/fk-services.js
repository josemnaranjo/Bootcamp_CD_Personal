import axios from 'axios';

export const createUser = async(user)=>{
    try{
        const newUser = await axios.post('http://localhost:8000/api', user);
        return newUser.data
    }catch(err){
        console.log("Tuvimos un problema con pasar los datos a la base de datos" ,err)
    }
}