import axios from "axios";


export const getProducts = async() =>{
        const products = await axios.get('http://localhost:8000/api/product/findAll');
        return products.data
}

export const createProduct = async(product)=>{
    try {
        const newProduct = await axios.post('http://localhost:8000/api/product/create', product);
        return newProduct.data
    }catch(err){
        console.log("No se pudo crear el producto",err)
    }
}

export const findOneProduct = async(id)=>{
    try{
        const oneProduct = await axios.get('http://localhost:8000/api/product/find/'+id);
        return oneProduct.data
    }catch(err){
        console.log("No pudimos encontrar el producto", err)
    }
}

export const updateProduct = async(id, product) => {
    try{
        const upProd = await axios.put(`http://localhost:8000/api/product/${id}/edit`, product)
        return upProd.data
    }catch(err){
        console.log("Lo lamento pero no pudimos actualizar tu producto", err)
    }
}

export const dProduct = async(id)=>{
        await axios.delete('http://localhost:8000/api/product/delete/'+id)   
}