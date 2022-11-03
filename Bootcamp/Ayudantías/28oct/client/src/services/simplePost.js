import axios from 'axios';

export async function simplePost (url,values) {
    try {
        const response = axios.post(url,values)
            return response
    } catch(err){
        console.log(err)
    }
}