import React,{useState,useEffect} from 'react';
import { getAllProducts } from '../services/product-services';
import 'bootstrap/dist/css/bootstrap.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { deleteOneProduct } from '../services/product-services';

const Main = () => {
    const [products,setProducts] = useState([]);
    const navigate = useNavigate();
    

    const getProductsFromService = async()=>{
        try{
            const productsFromService = await getAllProducts();
            setProducts(productsFromService)
        }catch(err){
            console.log("ocurrió un error al intentar traer todos los productos ",err )
        }
    }

    const toUpdate =(id)=>{
        navigate("/actualizar-producto/"+id)
    }

    const removeProdcut = (id)=>{
        const removeProductFromService = deleteOneProduct(id);
        setProducts(products.filter((product)=>product._id!== id));
        console.log(removeProductFromService)
    }

    useEffect(() => {
        getProductsFromService();
    }, []);
    
    return (
        <div>
            <h1>Listado de prodcutos en inventario</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Cantidad</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product,i)=> (
                        <tr key={i}>
                            <td>{product.nombre}</td>
                            <td>{product.descripcion}</td>
                            <td>{product.cantidad}</td>
                            <td>{<Button onClick={()=>removeProdcut(product._id)}>Borrar</Button>} {<Button onClick={()=>toUpdate(product._id)}>Actualizar</Button>}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default Main;
