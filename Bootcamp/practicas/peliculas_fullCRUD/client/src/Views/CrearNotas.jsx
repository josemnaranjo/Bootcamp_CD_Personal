import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import NoteForm from '../components/NoteForm';
import { createNota } from '../services/peliculas-service';


const CrearNotas = () => {
    const {id} = useParams();
    const navigate = useNavigate();


    const createNotaFromService = async (values)=>{
        try{
            await createNota(values,id);
            navigate('/');
        }catch(err){
            console.log(err);
        }
    }

    return (
        <div>
            <NoteForm rating={1} comentario="" onSubmitProp={createNotaFromService}/>
            <Link to='/'>Home</Link>
        </div>
    );
}

export default CrearNotas;
