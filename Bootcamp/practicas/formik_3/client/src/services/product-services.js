import axios from 'axios';


export const getAllProducts = async() =>{
    try{
        const allProducts = await axios.get('http://localhost:8000/api/ferre/findAll');
        return allProducts.data.products
    }catch(err){
        console.log(err)
    }
}

export const createProduct = async(product)=>{
    try{
        const newProduct = await axios.post('http://localhost:8000/api/ferre/crear',product);
        return newProduct.data.message
    }catch(err){
        console.log(err)
    }
}

export const findOne = async(id)=>{
    try{
        const result = await axios.get(`http://localhost:8000/api/ferre/findOne/${id}`);
        return result.data.message
    }catch(err){
        console.log(err)
    }
}

export const updateProduct = async(values,id)=>{
    try{
        const result = axios.put(`http://localhost:8000/api/ferre/editOne/${id}`,values);
        return result.data.message
    }catch(err){
        console.log(err)
    }
}