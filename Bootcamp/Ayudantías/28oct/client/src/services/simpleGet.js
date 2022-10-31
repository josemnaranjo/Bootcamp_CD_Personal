import axios from 'axios';

export async function simpleGet (url) {
    try {
        const data = axios.get(url)
            return data.data 
    } catch(err){
        console.log(err)
    }
}