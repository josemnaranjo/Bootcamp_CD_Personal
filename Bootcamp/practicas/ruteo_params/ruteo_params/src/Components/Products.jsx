import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    return (
        <div>
            <h1>Productos</h1>
            <ul>
                <li>Caja de zapatos</li>
                <li><Link to='/product/2'>Cebolla</Link></li>
                <li>Aviones</li>
                <li>Buzos</li>
                <li>Pan</li>
            </ul>
        </div>
    );
}

export default Products;
