import React, {useState,useEffect} from 'react';
import {useParams, useNavigate, Link} from 'react-router-dom';
import { getOnePelicula, editOnePelicula } from '../services/peliculas-service';
import PeliculaInfoForm from '../components/PeliculaInfoForm';


const UpdatePelicula = () => {
    
    const [pelicula, setPelicula]=useState();
    const {id} = useParams();
    const navigate = useNavigate()
    

    const getOnePeliculaFromService = async()=>{
        try{
            const peliculaFromService = await getOnePelicula(id);
            // console.log(peliculaFromService.data);
            setPelicula(peliculaFromService.data);
        }catch(err){
            console.log("HA OCURRUDO UN PROBLEMA AL TRAR LA INFO - DESDE VIEW UPDATE PELI ",err)
        }
    }
    useEffect(() => {
      getOnePeliculaFromService();
    }, []);


    const updatePeliculaFromService = async(values) =>{
        try{
            values.actores = [values.actor1,values.actor2];
            console.log("VALUES DE FORMULARIO DE EDITAR POKEMON ",values);
            await editOnePelicula(values,id);
            navigate('/')

        }catch(err){
            console.log("HA OCURRIDO UN PROBLEMA AL ACTUALZIAR LA PELICULA - VIEW UPDATE PELI ",err)
        }
    }
    return (
        <div>
            {pelicula && <PeliculaInfoForm titulo={pelicula.titulo} duracion={pelicula.duracion} actor1={pelicula.actores[0]} actor2={pelicula.actores[1]} fechaDeEstreno={pelicula.fechaDeEstreno} onSubmitProp={updatePeliculaFromService}/>}
            <Link to='/'>Home</Link>
        </div>
    );
}

export default UpdatePelicula;
