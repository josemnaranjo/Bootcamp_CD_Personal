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


    return (
        <div>
            <ProductManager setProducts={setProducts} setLoaded={setLoaded} />
            {loaded && <ProductList products={products} removeFromDom={removeFromDom}/>}
        </div>
    );
}

export default Main;
