import React from 'react';
import PkmForm from '../components/PkmForm';
import { useNavigate } from 'react-router-dom';
import { createPokemon } from '../services/pokemon.services';

const CreatePkm = () => {
    const navigate = useNavigate();

    const createPokemonFromService = async (pokemon) =>{
        try{
            const newPokemon = await createPokemon(pokemon);
            console.log(newPokemon.data);
            navigate('/')
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div>
            <PkmForm pokemon="" entrenador="" tipos={[]} rating={1} comentarios="" onSubmitProp={createPokemonFromService}></PkmForm>
        </div>
    );
}

export default CreatePkm;
