import React, {useState,useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductManager from '../components/ProductManager';
import { findOneProduct, updateProduct } from '../services/product-services';

const Update = () => {
    const params = useParams();
    const id = params.id
    const [title, setTitle] = useState("");
    const [price,setPrice]= useState("");
    const [description,setDescription]= useState("");
    const [loaded,setLoaded]=useState(false);

    const findOneProductFromService = async ()=>{
        const thatOne = await findOneProduct(id);
        setTitle(thatOne.title);
        setPrice(thatOne.price);
        setDescription(thatOne.description);
        setLoaded(true);
    }

    useEffect(() => {
        findOneProductFromService();
    }, []);

    const updateProductFromService = async (product) =>{
        const upProd = await updateProduct(id,product);
        alert("Producto actualizado con exito");
        return upProd
    }

    return (
        <div>
            {loaded && (<ProductManager 
            initialTitle={title} 
            initialPrice={price} 
            initialDescription={description} 
            onSubmitProp={updateProductFromService}
            />)
             }{
                <Link to='/'>Home</Link>
             }                
        </div>
    );
}

export default Update;
