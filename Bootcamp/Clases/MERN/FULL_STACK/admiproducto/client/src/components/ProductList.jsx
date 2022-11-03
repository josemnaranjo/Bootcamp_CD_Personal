
import React from 'react';
import { Link } from 'react-router-dom';
import { dProduct } from '../services/product-services';

const ProductList = (props) => {
    const {products, removeFromDom} = props;

const deleteProductFromService = (id) =>{
    try{
        dProduct(id);
        removeFromDom(id);
        console.log("Producto borrado con éxito")
    }catch(err){
        console.log("Ups, no pudimos borrar el producto seleccionado", err)
    }
}
    
    const deleteProduct = (id)=>{
        deleteProductFromService(id);
    }

    return (
        <div>
            <h1>Listado de productos</h1>
            <ul>
                {products?.map((product,i)=>{
                return  <li key={i}>
                    <Link to={`/api/product/find/${product._id}`}> 
                        {product.title}
                    </Link>
                    |
                    <button onClick={e=>deleteProduct(product._id)}>
                        Delete
                    </button>
                </li>})}
            </ul>
        </div>
    );
}

export default ProductList;
