import axios from 'axios';

export async function simpleGet (url,values) {
    try {
        const data = axios.post(url,values)
            return data.data 
    } catch(err){
        console.log(err)
    }
}