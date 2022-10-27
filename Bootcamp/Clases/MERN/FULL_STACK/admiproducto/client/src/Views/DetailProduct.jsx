import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DetailProduct = () => {
    let params = useParams();
    const [product,setProduct] = useState({});

    useEffect(() => {
        const id = params.id;
        axios.get(`http://localhost:8000/api/product/find/${id}`)
            .then(res=> setProduct({
                ...res.data
            }))
    }, []);

    return (
        <div>
            <p>Titulo: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    );
}

export default DetailProduct;
