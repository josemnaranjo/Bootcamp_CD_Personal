import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ProductManager from '../components/ProductManager';

const Update = () => {
    const params = useParams();
    const id = params.id
    const [title, setTitle] = useState("");
    const [price,setPrice]= useState("");
    const [description,setDescription]= useState("");
    const [loaded,setLoaded]=useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/find/'+ id)
            .then(res=>{
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
                setLoaded(true);
            })
    }, []);

    const updateProduct = product =>{
        axios.put(`http://localhost:8000/api/product/${id}/edit`, product)
            .then(res=>console.log(res));
    }

    return (
        <div>
            {loaded && (<ProductManager 
            initialTitle={title} 
            initialPrice={price} 
            initialDescription={description} 
            onSubmitProp={updateProduct}
            />
             )}                
        </div>
    );
}

export default Update;
