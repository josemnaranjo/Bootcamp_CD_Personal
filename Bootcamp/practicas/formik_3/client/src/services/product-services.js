import axios from 'axios';


export const getAllProducts = async() =>{
    try{
        const allProducts = await axios.get('http://localhost:8000/api/ferre/findAll');
        return allProducts.data.products
    }catch(err){
        console.log(err)
    }
}