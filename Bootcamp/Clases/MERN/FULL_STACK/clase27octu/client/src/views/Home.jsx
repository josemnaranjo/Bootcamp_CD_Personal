import React, {useEffect, useState} from 'react';
import { deleteTravel, getAllTravels, getTravel } from '../services/travel-service';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [travels, setTravels]=useState([]);
    const navegate =useNavigate();
    
    const getTravelsFromService = async ()=>{
        try{
            const travelFromService = await getAllTravels();
            setTravels(travelFromService.travels)
        }catch(err){    
            console.log(err)
        }
    }
    

    useEffect(() => {
        getTravelsFromService();
    }, []);

  
    const removeTravel = async (id)=>{
        try{
            await deleteTravel(id);
            setTravels(travels.filter(travel => travel._id !== id)) 
        }catch(err){

        }
    }

    const redirectToForm = (id) =>{
        navegate(`/update-paquete/${id}`)
    }

    return (
        <div>
            <h1>Paquetes disponibles</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nombre del paquete</th>
                        <th>Origen</th>
                        <th>Destino</th>
                        <th>Precio</th>
                        <th>Fecha</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    travels?.map(travel=>(
                        <tr key={travel._id}>
                            <td>{travel.packageName}</td>
                            <td>{travel.origin}</td>
                            <td>{travel.destination}</td>
                            <td>${travel.price}</td>
                            <td>{moment(travel.arrive_date).format("DD-MM-YYY")}</td>
                            <td>
                                <Button variant="danger" className='action-btn' onClick={()=>removeTravel(travel._id)}>Eliminar</Button>
                                <Button variant="info" className='action-btn' onClick={()=>redirectToForm(travel._id)}>Editar</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

        </div>
    );
}

export default Home;
