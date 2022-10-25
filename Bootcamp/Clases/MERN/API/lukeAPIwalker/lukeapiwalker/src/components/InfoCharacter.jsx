import React, {useState,useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCharacter } from '../services/Data-service';
import styles from './InfoCharacter.module.css';
import {getHomeWorld} from '../services/Data-service';

const InfoCharacter = () => {
    const {id} = useParams();
    const [infoCh,setInfoCh] = useState([]);
    const [homeworldInfo,setHomeworldInfo]=useState([]);


const getCharacterFromService = async ( )=>{
    try{
        const info = await getCharacter(id);
        setInfoCh(info);
    }catch(err){
        console.log("Desde getCharacterFromService error: ",err);
    }
}

const getHomeworldFromService = async (url)=> {
    try{
        const homeworldInfo = await getHomeWorld(url);
        setHomeworldInfo(homeworldInfo);
    }catch(err){
        console.log(err);
    }
}

    useEffect(() => {
        getCharacterFromService();
    },[]);

    useEffect(() => {
        if(infoCh.length!==0){
            getHomeworldFromService(infoCh.homeworld);
        }
    },[infoCh]);

   
    return (
        <div className={styles.infoCharContainer}>
            <div className={styles.infoChar}>
                <h1>{infoCh.name}</h1>
                <h3>Height: {infoCh.height}</h3>
                <h3>Mass: {infoCh.mass}</h3>
                <h3>Birth year: {infoCh.birth_year}</h3>
                <h3>Homeworld: {homeworldInfo.name}</h3>
            </div>
            <Link to='/'>Home</Link>
        </div>
    );
}

export default InfoCharacter;
