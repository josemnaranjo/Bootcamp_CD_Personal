import React,{useState,useEffect} from 'react';
import {getAllPeliculas} from '../services/peliculas-service';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';


const Main = () => {
    const [peliculas,setPeliculas]=useState([]);
    const navigate = useNavigate()

    const getAllMoviesFromService = async ()=>{
        try{
            const peliculas = await getAllPeliculas(); 
            console.log("TODAS LAS PELICULAS - MAIN VIEW", peliculas.data);
            setPeliculas(peliculas.data)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        getAllMoviesFromService()
    }, []);

    const toEditPelicula = (id) =>{
        navigate(`/edit-pelicula/${id}`)
    }

    const toCreateNota = (id) =>{
        navigate(`/new-nota/${id}`)
    }

    const toNotas = (id) =>{
        navigate(`/notas/${id}`)
    }
    
    return (
        <div>
            <section>
                <table className='table table-hover table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>Titulo de la pelicula</th>
                            <th>Duracion (en minutos)</th>
                            <th>Reparto</th>
                            <th>Fecha de estreno</th>
                            <th>Evaluacion promedio</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {peliculas.map((pelicula,i)=>(
                            <tr key={i}>
                                <th>{pelicula.titulo}</th>
                                <th>{pelicula.duracion}</th>
                                <th>{pelicula.actores[0]} {pelicula.actores[1]}</th>
                                <th>{moment(pelicula.fechaDeEstreno).format('DD-MM-YYYY')}</th>
                                <th>{pelicula.ratingAvg ? parseFloat(pelicula.ratingAvg.toFixed(2)): 0 }</th>
                                <th>
                                    <button className='btn btn-info btn-small' onClick={()=>toNotas(pelicula._id)}>Ver comentarios</button> 
                                    <button className='btn btn-secondary btn-small'onClick={()=>toCreateNota(pelicula._id)}>Crear comentarios</button>
                                    <button className='btn btn-warning btn-small' onClick={()=>toEditPelicula(pelicula._id)}>Editar pelicula</button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
}

export default Main;
