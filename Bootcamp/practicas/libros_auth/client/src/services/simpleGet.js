import axios from 'axios';

export async function simpleGet (url) {
    try{
        const apiResponse = axios.get(url);
        return apiResponse

    }catch(err){
        return {error:`se ha producido un error: ${err}`}
    }
}