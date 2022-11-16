import axios from 'axios';

export const getPokemons = async ()=> await axios.get('http://localhost:8000/api');

export const createPokemon = async (pokemon)=> await axios.post('http://localhost:8000/api/create-pokemon',pokemon);

export const updatePokemon = async (pokemon, id) => await axios.put(`http://localhost:8000/api/edit-pokemon/${id}`,pokemon);

export const findOnePokemon = async (id)=> await axios.get(`http://localhost:8000/api/${id}`);

export const deletePokemon = async (id)=> await axios.delete(`http://localhost:8000/api/${id}`);

export const getNotesFromPokemon = async(id)=> await axios.get('http://localhost:8000/api/notes/'+id);

export const createNote = async(id,info)=> await axios.post(`http://localhost:8000/api/create-note/${id}`,info,{withCredentials:true})



export const createUser = async(user) => await axios.post('http://localhost:8000/api/register',user);

export const login = async(values)=> await axios.post('http://localhost:8000/api/login',values);

export const logout = async() => {
    try{
        const response = await axios.post('http://localhost:8000/api/logout');
        if(!response.data.success){
            console.log("DESDE PKM SERVICE ",response.data.success);
            return {success:false, data:response}
        }else{
            return {success:true,data:response}
        }

    }catch(err){
        return {success:false,data:{errors:{error:err}}}
    }
}


export const getUserAuth = async(id) => await axios.get(`http://localhost:8000/api/user/${id}`,{withCredentials:true})
