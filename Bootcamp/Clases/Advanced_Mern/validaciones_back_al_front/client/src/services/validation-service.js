import axios from 'axios';

export const createBook = async(book)=>{
    try {
        const newBook = await axios.post('http://localhost:8000/api/book/create', book);
        return newBook.data
    }catch(err){
        const error = err.response.data.errors
        const errorArr=[]
        for(const key of Object.keys(error)){
            errorArr.push(error[key].message)
        }
        return errorArr
    }
}