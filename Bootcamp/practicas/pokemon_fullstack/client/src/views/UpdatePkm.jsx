import React,{useState,useEffect} from 'react';
import {useParams,useNavigate} from "react-router-dom";
import { findOnePokemon, updatePokemon } from '../services/pokemon.services';
import PkmInfoForm from '../components/PkmInfoForm';

const UpdatePkm = () => {
    const [pokemon,setPokemon]=useState({});
    const {id}= useParams();
    const navigate =useNavigate()

    const getOnePkmFromServices = async()=>{
        try{
            const pkm = await findOnePokemon(id);
            setPokemon(pkm.data)
        }catch(err){
            console.log("HA OCURRIDO UN PROBLEMA AL TRAER LA INFO DEL POKEMON PARA ACTUALZIAR ", err)
        }
    }

    useEffect(() => {
       getOnePkmFromServices()
    }, []);

    const updatePkm = async(values)=> {
        try{
            console.log("VALUES DE FORMULARIO DE EDITAR POKEMON ",values);
            await updatePokemon(values,id);
            navigate('/')
        }catch(err){
            console.log("HA OCURRIDO UN PROBLEMA AL ACTUALIZAR EL POKEMON ", err)
        }

    }

    return (
        <div>
            <PkmInfoForm pokemon={pokemon.pokemon} entrenador={pokemon.entrenador} tipos={pokemon.tipos} onSubmitProp={updatePkm}/>
        </div>
    );
}

export default UpdatePkm;
