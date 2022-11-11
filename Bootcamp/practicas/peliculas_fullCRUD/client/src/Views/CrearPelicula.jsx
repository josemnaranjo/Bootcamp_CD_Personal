import React,{useState} from 'react';
import PeliculaForm from '../components/PeliculaForm';
import { useNavigate, Link } from 'react-router-dom';
import { createPelicula } from '../services/peliculas-service';

const CrearPelicula = () => {
    const navigate = useNavigate();
    const [errors,setErrors]=useState([]);


    const createPeliculaFromService = async (values) =>{
        values.actores = [values.actor1,values.actor2];
        const newPelicula = await createPelicula(values);
        console.log("DESDE VIEW CREAR PELICULA",newPelicula.data);
        if(newPelicula.data.message===""){
            navigate("/")
        }else{
            console.log("ERROR DESDE BACKEND-CREAR PELICULA",newPelicula.data.errors);
                const errorResponse= newPelicula.data.errors;
                const errorArr = [];
                console.log("OBJECT KEYS", Object.keys(errorResponse));
                for (const key of Object.keys(errorResponse)){
                    console.log(errorResponse[key]);
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
        }
    }

    return (
        <div>
            
            <h1>Crear nueva pelicula</h1>
            <PeliculaForm titulo="" duracion="" actor1="" actor2=""  rating="" comentario="" onSubmitProp={createPeliculaFromService} />
            {errors.map((err,i)=><p key={i}>{err}</p>)}
            <Link to="/">Home</Link>
        </div>
    );
}

export default CrearPelicula;
