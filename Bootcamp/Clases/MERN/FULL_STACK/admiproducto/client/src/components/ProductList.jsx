import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = (props) => {
    const {products} = props;
    return (
        <div>
            <h1>Listado de productos</h1>
            <ul>
                {products.map((product,i)=>{
                return  <li key={i}><Link to={`/api/product/find/${product._id}`}> {product.title}</Link></li>})}
            </ul>
        </div>
    );
}

export default ProductList;
