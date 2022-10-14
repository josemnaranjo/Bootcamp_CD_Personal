import React from 'react';
import { useParams, Link } from 'react-router-dom';

const Especial = () => {
    const {text} = useParams();
    const {colorText}= useParams();
    const {bkgColor} = useParams();

    const prueba = (text,colorText,bkgColor) =>{
        if(isNaN(text)){
            return <h1 style={{
                color: colorText,
                backgroundColor: bkgColor
            }}>La palabra es {text}</h1>
        } else {
            return <h1>Error, debe ingresar una palabra como primer parametro</h1>
        }
    }


    return (
        <div>
            {
                prueba(text,colorText,bkgColor)
            }
            <Link to='/home'>Ir a home</Link>
        </div>
    );
}

export default Especial;
