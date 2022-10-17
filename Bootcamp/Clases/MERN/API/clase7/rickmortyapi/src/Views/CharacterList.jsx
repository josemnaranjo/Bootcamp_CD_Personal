import React, {useEffect, useState} from 'react';
import Character from '../Components/Character';
import { getAllCharacters, getOneCharacter } from '../services/characters-service';
import styles from './CharacterList.module.scss'

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);
    //con esto determinamos si se muestra la lista de personajes o el personaje en particular
    const [showList,setShowList] = useState(true);
    const [character,setCharacter] = useState("")

    //aqui traigo el service al componente. Tiene que ser una funcion asincrona porque está esperando el resultado
    //de otra funcion asíncrona
    const getCharactersFromService = async () =>{
        try{
        const charactersFromService = await getAllCharacters();
        console.log(charactersFromService);
        setCharacters(charactersFromService.results);
        }catch(err){
            console.log(err);
        }
    };

    //funcion para atraer a un solo personaje
    const getCharacterFromService = async(url) => {
        try{
            const characterFromService = await getOneCharacter(url);
            setCharacter(characterFromService);
            setShowList(false);
        }catch(err){
            console.log("error de character",err);
        }
    }

    //con este useEffect llamo a la api cuando se cargue la pagina
    useEffect(()=>{
        getCharactersFromService();
    },[]);


    return (
        <div className={styles["characters-container"]}>
            {
                showList ? (
                        characters?.map(character=>(
                        <div className={styles["character-container"]} onClick={()=>getCharacterFromService(character.url)}>
                            <div>{character.name}</div>
                            <img src={character.image} alt={`Imagen del personaje ${character.name}`}/>
                        </div>
                    ))
                ) :( 
                    <div>
                        <button onClick={()=>setShowList(true)}>Volver</button>
                        <Character 
                        name={character?.name} 
                        species={character?.species} 
                        image={character?.image}
                        status={character?.status}/>
                    </div>
                )
            }
        </div>
    );
}

export default CharacterList;
