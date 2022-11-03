import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import { simpleGet } from '../services/simpleGet';
import { simplePost } from '../services/simplePost';

const Main = () => {

    const [productos, setProductos] = useState();
    const [errors,setErrors]=useState([]);

    useEffect(() => {
        getProductos();
    }, []);

    const getProductos = async ()=>{
        const response = await simpleGet("http://localhost:8000/api/products");
        console.log(response);
        setProductos(response.data.productos)
    }

    const crearProduct = async (values)=>{
        const response = await simplePost("http://localhost:8000/api/products/new",values);
        //el if va a ver si el mensaje que definimos en el back como vacio en caso de exito, llega vacio
        if(response.data.message===""){
            setProductos(
                [...productos,response.data.product]
            )
        }else{
            console.log("ERRORES",response.data.error);
            const errorResponse = response.data.error;
            const errorArr =[];
            //loop que itera sobre los keys que se producen en Object.keys
            for(const key of Object.keys(errorResponse)){
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        }
    }

    return (
        <div>
            {/* hacemos que se muestren los errores */}
            {errors.map((error,i)=><p key={i}>ERROR: {error}</p>)}
            <ProductForm nombre="" precio="" onSubmitProp={crearProduct}/>
            <h3>Todos los productos</h3>
            {productos?.map((producto,i)=><p key={i}>{producto.nombre} - {producto.precio}</p>)}
        </div>
    );
}

export default Main;
