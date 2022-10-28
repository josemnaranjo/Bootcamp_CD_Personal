import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams, } from 'react-router-dom';

const DetailProduct = () => {
    let params = useParams();
    let navigate = useNavigate();
    const [product,setProduct] = useState({});

    useEffect(() => {
        const id = params.id;
        axios.get(`http://localhost:8000/api/product/find/${id}`)
            .then(res=> setProduct({
                ...res.data
            }))
    }, []);

    const deleteProduct = (id)=>{
        axios.delete('http://localhost:8000/api/product/delete/'+id)
            .then(res=> navigate('/'))
    }

    return (
        <div>
            <p>Titulo: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>

            <button onClick={e=>deleteProduct(product._id)}>Delete</button>
        </div>
    );
}

export default DetailProduct;
