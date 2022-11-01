import React, {useState,useEffect} from 'react';
import axios from 'axios';
import ProductManager from '../components/ProductManager';
import ProductList from '../components/ProductList';

const Main = () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/findAll')
        .then(res=>{
            setProducts(res.data);
            setLoaded(true)
        })
    }, []);

    const removeFromDom = productId => {
        setProducts(products.filter(product=>product._id !==productId));
    }

    const onSubmitProp = product => {
        axios.post('http://localhost:8000/api/product/create', product)
        //copiamos el elemento products y modificamos con la data de response
        .then(res=>setProducts([...products,res.data]))
        .catch(err=>console.log(err))
    }


    return (
        <div>
            <ProductManager initialTitle="" initialPrice="" initialDescription="" onSubmitProp={onSubmitProp} />
            {loaded && <ProductList products={products} removeFromDom={removeFromDom}/>}
        </div>
    );
}

export default Main;
