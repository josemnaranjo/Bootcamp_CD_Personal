import React, {useState,useEffect} from "react";
import styles from './Character.module.scss';
import {useParams} from "react-router-dom";

const Character = () => {
    // { name, image, species, status }


  
    
    const {userId} = useParams();
    return (
        <div className={styles["character-container"]} >
            <img src={image} alt={`Imagen del personaje ${name}`} />
            <div>
                <h1>{name}</h1>
                <h3>{species}</h3>
                <h3>{status}</h3>
            </div>

        </div>
    )
}

export default Character;