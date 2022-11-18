import axios from 'axios';

export async function simpleGetAuth (url) {
    try{
        const apiResponse = axios.get(url,{withCredentials:true});
        return apiResponse

    }catch(err){
        return {error:`se ha producido un error: ${err}`}
    }
}