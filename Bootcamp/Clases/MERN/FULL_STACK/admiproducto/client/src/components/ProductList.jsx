import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = (props) => {
    const {products, removeFromDom} = props;

    
    const deleteProduct = (id)=>{
        axios.delete('http://localhost:8000/api/product/delete/'+id)
            .then(res=>{
                removeFromDom(id)
            })
    }


    return (
        <div>
            <h1>Listado de productos</h1>
            <ul>
                {products.map((product,i)=>{
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
