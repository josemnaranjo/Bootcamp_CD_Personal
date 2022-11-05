import React,{useState,useEffect} from 'react';
import { getAllProducts } from '../services/product-services';
import 'bootstrap/dist/css/bootstrap.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const Main = () => {
    const [products,setProducts] = useState([]);

    const getProductsFromService = async()=>{
        try{
            const productsFromService = await getAllProducts();
            // console.log(productsFromService)
            setProducts(productsFromService)
        }catch(err){
            console.log("ocurrió un error al intentar traer todos los productos ",err )
        }
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
                            <td>{<Button>Borrar</Button>} {<Button>Actualizar</Button>}</td>
                        </tr>
                    ))}
                </tbody>

            </Table>
        </div>
    );
}

export default Main;
