import axios from 'axios';

export async function simpleGet (url) {
    try {
        const response = axios.get(url)
            return response 
    } catch(err){
        console.log(err)
    }
}