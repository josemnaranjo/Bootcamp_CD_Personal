import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getCharacter } from '../services/Data-service';
// import {getHomeWorld } from '../services/Data-service';

const InfoCharacter = () => {
    const {id} = useParams();
    const [infoCh,setinfoCh] = useState([]);
    // const [homeWorldUrl, setHomeWorldUrl] =useState("");
    // const [homeWorldInfo, setHomeWorldInfo] = useState([]);

const getCharacterFromService = async ( )=>{
    try{
        const info = await getCharacter(id);
        console.log("Desde getCharacterFromService info: ",info);
        setinfoCh(info);
        // setHomeWorldUrl(info.homeworld)
    }catch(err){
        console.log("Desde getCharacterFromService error: ",err);
    }
}




    useEffect(() => {
        getCharacterFromService();
    },[]);

    // useEffect(() => {
    //     getHomeWorldFromService();
    // },[getCharacterFromService]);

    return (
        <div>
            <h1>{infoCh.name}</h1>
            <h3>Height: {infoCh.height}</h3>
            <h3>Mass: {infoCh.mass}</h3>
            <h3>Birth year: {infoCh.birth_year}</h3>
            {/* <h3>Homeworld: {homeWorldInfo.name}</h3> */}
        </div>
    );
}

export default InfoCharacter;
