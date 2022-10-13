import React,{useState} from 'react';
import axios from 'axios';

const PkmAxios = () => {
    const [pokemones, setPokemones] =useState(null);

    const fetchPkm = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
            .then(res=> setPokemones(res.data.results))
    } 


    return (
        <div>
            <button onClick={fetchPkm}>FETCH POKEMONES</button>
            <ul>
                {pokemones?.map((pkm,i)=>{
                    return <li key={i}>{pkm.name}</li>
                    })
                }
            </ul>
        </div>
    );
}

export default PkmAxios;
