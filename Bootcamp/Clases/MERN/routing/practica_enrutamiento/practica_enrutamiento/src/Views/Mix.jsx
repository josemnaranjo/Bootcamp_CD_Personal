import React from 'react';
import { useParams, Link } from 'react-router-dom';

const Mix = () => {
    const {word} = useParams();

    const prueba = (word) =>{
        if(isNaN(word)){
            return <h1>La palabra es {word}</h1>
        } else {
            return <h1>El numero es {word}</h1>
        }
    }

    
    return (
        <div>
            {
               prueba(word)
            }
            <Link to='/home'>Ir a home</Link>
        </div>
    );
}

export default Mix;
