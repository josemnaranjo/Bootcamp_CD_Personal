import axios from 'axios';

export async function simplePost (url,values) {
    try{
        const apiResponse = axios.post(url,values);
        return apiResponse

    }catch(err){
        return {error:`se ha producido un error: ${err}`}
    }
}