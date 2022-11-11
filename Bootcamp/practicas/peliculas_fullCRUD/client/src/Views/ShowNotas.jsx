import React,{useState,useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { getOnePelicula, getNotaForAPelicula } from '../services/peliculas-service';

const ShowNotas = () => {
    const {id}= useParams();
    const [pelicula,setPelicula]=useState();
    const [notas,setNotas]= useState([]);

    const getOnePeliculaFromService = async()=>{
        try{
            const peliculaFromService = await getOnePelicula(id);
            // console.log(peliculaFromService.data);
            setPelicula(peliculaFromService.data);
        }catch(err){
            console.log("HA OCURRUDO UN PROBLEMA AL TRAR LA INFO - DESDE VIEW UPDATE PELI ",err)
        }
    }

    const getNotasFromService = async() =>{
        try{
            const notasService = await getNotaForAPelicula(id);
            console.log(notasService);
            setNotas(notasService.data.notas)

        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        getOnePeliculaFromService()
    }, []);

    useEffect(() => {
        if(pelicula){
            getNotasFromService()
        }
    }, [pelicula]);

    return (
        <div>
            <section>
                <h1>{pelicula?.titulo}</h1>
            </section>
            <section>
                {notas.map((nota,i)=>(
                    <div key={i}>
                        <p>Rating: {nota.rating}</p>
                        <p>{nota.comentario}</p>
                    </div>
                ))}
            </section>
            <Link to='/'>Home</Link>
        </div>
    );
}

export default ShowNotas;
