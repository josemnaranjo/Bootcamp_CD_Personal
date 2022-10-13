import React, {useState} from 'react';

const Pokemones = () => {
    const [pokemons,setPokemones] = useState([]);

    const onClick = ()=>{
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
        .then(response =>  response.json())
        .then(response => setPokemones(response.results))
    }   



    return (
        <div>
            <button onClick={onClick}>FETCH POKEMONES</button>

            <ul>
                {pokemons.map((pkm,i)=>{
                    return (<li key={i}>{pkm.name}</li>)
                })}
            </ul>
        </div>
    );
}

export default Pokemones;


//endpoints son las acciones particulares que tiene nuestra API (p.e. dar nombre, dar apellidos, dar ruts, etc)