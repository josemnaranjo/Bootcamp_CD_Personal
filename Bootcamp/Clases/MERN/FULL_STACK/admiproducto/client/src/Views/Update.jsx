import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const Update = () => {
    const params = useParams();
    const id = params.id
    const [title, setTitle] = useState("");
    const [price,setPrice]= useState("");
    const [description,setDescription]= useState("");

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/find/'+ id)
            .then(res=>{
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    }, []);

    const updateProduct = e=>{
        axios.put(`http://localhost:8000/api/product/${id}/edit`, {
            title,
            price,
            description
        })
            .then(res=>console.log(res));

    }

    return (
        <div>
            <h1>Actualizar datos</h1>
                <form onSubmit={updateProduct}>
                    <p>
                        <label htmlFor='title'>Title</label>
                        <input type='text' name='title' value={title} onChange={e=>setTitle(e.target.value)}/>
                    </p>

                    <p>
                        <label htmlFor='price'>Price</label>
                        <input type='text' name='price' value={price} onChange={e=>setPrice(e.target.value)}/>
                    </p>

                    <p>
                        <label htmlFor='description'>Description</label>
                        <input type='text' name='description' value={description} onChange={e=>setDescription(e.target.value)}/>
                    </p>

                    <button type='submit'>Update</button>

                </form>
                <Link to='/'>Home</Link>
        </div>
    );
}

export default Update;
