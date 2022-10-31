import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import { simpleGet } from '../services/simpleGet';
import { simplePost } from '../services/simplePost';

const Main = () => {

    const [productos, setProductos] = useState();
    useEffect(() => {
        getProductos();
    }, []);

    const getProductos = async ()=>{
        const response = await simpleGet("http://localhost:8000/api/products");
        console.log(response);
        setProductos(response.data.productos)
    }

    const crearProduct = async (values)=>{
        const response =await simplePost("http://localhost:8000/api/products/new",values)
        setProductos(
            [...productos,response.data.product]
        )
    }

    return (
        <div>
            <ProductForm nombre="" precio="" onSubmitProp={crearProduct}/>
            <h3>Todos los productos</h3>
            {productos?.map((producto,i)=><p key={i}>{producto.nombre} - {producto.precio}</p>)}
        </div>
    );
}

export default Main;
