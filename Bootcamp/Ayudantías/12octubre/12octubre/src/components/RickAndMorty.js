import React, {useState} from 'react';
import RAMCard from './RAMCard';

const RickAndMorty = () => {
    const [personajes, setPersonajes] = useState([]);

    const onClick = ()=>{
        fetch('https://rickandmortyapi.com/api/character?page=1')
        .then(response=>response.json())
        .then(response=> {
            console.log(response);
            setPersonajes(response.results);
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <button onClick={onClick}>FETCH PERSONAJES</button>

            {/* <ul>
                {personajes.map((pers,i)=>{
                    return (<li key={i}>{pers.name}</li>)
                })}
            </ul> */}

            {
                personajes.map((personaje, index)=>{
                    return <RAMCard key={index} personaje={personaje.name} imagen={personaje.image}/> 
                })
            }


        </div>
    );
}

export default RickAndMorty;
