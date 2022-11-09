import React, {useState,useEffect} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { deleteAutor, getAllAutores } from '../services/autores-services';

const Main = () => {
    const [autores,setAutores]=useState([]);
    const navegate = useNavigate()

    const getAllAutoresFromService = async()=>{
        try{
            const response = await getAllAutores();
            const autores = response.data.autores
            setAutores(autores);
        }catch(err){
            console.log(err)
        }
    }

    const deleteFromService = async (id) =>{
        try{
            const response = await deleteAutor(id);
            console.log(response.data.response);
            setAutores(autores.filter(autor=>autor._id!==id))
        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        getAllAutoresFromService()
    }, []);


    const toEdit = (id) =>{
        navegate(`/api/edit/${id}`)
    }

    return (
        <div>
            <section className='titulo-main'>
                <h1>Autores Favoritos</h1>
                <Link to='/api/new'>Agregar autor</Link>
            </section>
            <section className='table-main'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Autor</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {autores.map((autor,i)=>(
                            <tr key={i}>
                                <td>{autor.nombreCompleto}</td>
                                <td><Button variant='light' onClick={()=>toEdit(autor._id)}>Editar</Button> <Button variant='danger' onClick={()=>deleteFromService(autor._id)}>Borrar</Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table> 
            </section>
            
        </div>
    );
}

export default Main;
