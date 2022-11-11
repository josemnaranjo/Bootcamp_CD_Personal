import React from 'react';
import NoteForm from '../components/NoteForm';
import { useParams,useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { createNote, findOnePokemon } from '../services/pokemon.services';

const AddNotas = () => {
    const navigate = useNavigate();
    const {id}= useParams();
    const [pokemon,setPokemon]= useState();
    const [errors,setErrors]=useState([]);


    const addNoteFromServices = async (values)=>{
        console.log("VALUES DE FORMULARIO DE NUEVA NOTA ", values);
        const valuesFinal = {...values,idPokemon:id};
        const nota = await createNote(id,valuesFinal);
        if(nota.data.comentario){
            navigate('/');
        }else{
            console.log("ERROR DESDE BACKEND-ADDNOTAS",nota.data.errors);
            const errorResponse= nota.data.errors;
            console.log("OBJECT KEYS", Object.keys(errorResponse));
            const errorArr = [];
            for (const key of Object.keys(errorResponse)){
                console.log(errorResponse[key]);
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        }
    }
    return (
        <div>
            <NoteForm raiting={1} comentario="" onSubmitProp={addNoteFromServices} />
            {errors.map((err,i)=><p key={i}>{err}</p>)}
            <h1>Informacion del pokemon</h1>
            <h3>Nombre del pokemon: {pokemon?.pokemon}</h3>
            <h3>Nombre del entrenador: {pokemon?.entrenador}</h3>
        </div>
    );
}

export default AddNotas;
