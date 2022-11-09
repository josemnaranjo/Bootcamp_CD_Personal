import React from 'react';
import PkmForm from '../components/PkmForm';
import { useNavigate } from 'react-router-dom';
import { createPokemon } from '../services/pokemon.services';
import { useState } from 'react';


const CreatePkm = () => {
    const navigate = useNavigate();
    const [errors,setErrors]=useState([]);

    const createPokemonFromService = async (pokemon) =>{

            const newPokemon = await createPokemon(pokemon);
            console.log("DESDE CREATEPKM ", newPokemon.data);
            if(newPokemon.data.message=== ""){
                navigate('/');
            }else{
                console.log("ERROR DESDE BACKEND-CREATEPKM",newPokemon.data.errors);
                const errorResponse= newPokemon.data.errors;
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
            <PkmForm pokemon="" entrenador="" tipos={[]} rating={1} comentarios="" onSubmitProp={createPokemonFromService}></PkmForm>
            {errors.map((err,i)=><p key={i}>{err}</p>)}
        </div>
    );
}

export default CreatePkm;
