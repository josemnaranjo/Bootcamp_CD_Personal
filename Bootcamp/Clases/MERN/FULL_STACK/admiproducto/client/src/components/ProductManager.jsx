import React, {useState} from 'react';
import axios from 'axios';


const ProductManager = (props) => {
    const {setProducts,setLoaded} = props;
    const [title,setTitle] = useState("");
    const [price,setPrice] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product/create', {
            title,
            price,
            description
        })
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
        
        setTitle("");
        setPrice("");
        setDescription("")

        axios.get('http://localhost:8000/api/product/findAll')
        .then(res=>{
            setProducts(res.data);
            setLoaded(true)
        })
    }


    return (
        <div>
            <h1>Product Manager</h1>
            <form onSubmit={handleSubmit}>
                <p>
                    <label htmlFor='title'>Title</label>
                    <input type='text' value={title} onChange={e => setTitle(e.target.value)}/>
                </p>
                <p>
                    <label htmlFor='price'>Price</label>
                    <input type='text' value={price} onChange={e => setPrice(e.target.value)}/>
                </p>
                <p>
                    <label htmlFor='description'>Description</label>
                    <input type='text' value={description} onChange={e => setDescription(e.target.value)}/>
                </p>
                <button type='submit'>Create</button>
            </form>
        </div>
    );
}

export default ProductManager;
