import React, {useState,useEffect} from 'react';
import ProductManager from '../components/ProductManager';
import ProductList from '../components/ProductList';
import { getProducts,createProduct } from '../services/product-services';


const Main = () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);


    const getProductsFromService = async()=>{
        try{
            const productsFromService = await getProducts();
            setProducts(productsFromService);
            setLoaded(true)
        }catch(err){
            console.log("Ups, algo ha salido mal", err)
        }
    }

    useEffect(() => {
        getProductsFromService();
    }, []);

    const removeFromDom = productId => {
        setProducts(products.filter(product=>product._id !==productId));
    }

    const onSubmitProp = async (product) => {
        const response =  await createProduct(product);
        setProducts([...products,response]);
    }

    return (
        <div>
            <ProductManager initialTitle="" initialPrice="" initialDescription="" onSubmitProp={onSubmitProp} />
            {loaded && <ProductList products={products} removeFromDom={removeFromDom}/>}
        </div>
    );
}

export default Main;
