import React, {useState,useEffect} from 'react';
import { getAllCharacters } from '../services/simpleGet';

const Personajes = () => {
    const [characters, setCharacters]=useState([]);

    const getCharactersFromService= async()=>{
        try{
            const charactersInfo = await getAllCharacters();
            setCharacters(charactersInfo)
        }catch(err){
            console.log("desde getCharactersFromService ",err)
        }
    }

    useEffect(() => {
        getCharactersFromService();
    }, []);


    return (
        <div>
            <ul>
                {characters.map((character,i)=><li key={i}>{character.name}</li>)}
            </ul>
        </div>
    );
}

export default Personajes;
