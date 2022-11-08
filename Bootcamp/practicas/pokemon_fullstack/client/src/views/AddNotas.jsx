import React from 'react';
import NoteForm from '../components/NoteForm';
import { useParams,useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { createNote, findOnePokemon } from '../services/pokemon.services';

const AddNotas = () => {
    const navigate = useNavigate();
    const {id}= useParams();
    const [pokemon,setPokemon]= useState()

    const getPokemonFromService = async ()=>{
        const pkm = await findOnePokemon(id);
        setPokemon(pkm.data);
    }

    useEffect(() => {
        getPokemonFromService()
    }, []);

    const addNoteFromServices = async (values)=>{
        console.log("VALUES DE FORMULARIO DE NUEVA NOTA ", values);
        const valuesFinal = {...values,idPokemon:id};
        await createNote(valuesFinal);
        navigate('/');
    }
    return (
        <div>
            <NoteForm raiting={1} comentario="" onSubmitProp={addNoteFromServices} />
            <h1>Informacion del pokemon</h1>
            <h3>Nombre del pokemon: {pokemon?.pokemon}</h3>
            <h3>Nombre del entrenador: {pokemon?.entrenador}</h3>
        </div>
    );
}

export default AddNotas;
