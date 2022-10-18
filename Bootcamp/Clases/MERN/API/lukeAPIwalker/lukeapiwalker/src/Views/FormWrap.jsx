import React, {useState,useEffect} from 'react';
import Formulario from '../components/Formulario';
import Information from '../components/Information';


const FormWrap = () => {
    const [data,setData] = useState([]);
    const [keys,setKeys] = useState([]);

    const handleInformation = (value) =>{
        const objValues = Object.values(value);
        const objKeys = Object.keys(value);
        console.log("desde FormWrap: ",objValues);
        console.log("desde FormWrap: ",objKeys);
        setData(objValues);
        setKeys(objKeys);
    }
    return (
        <div>
            <Formulario handleInformation={handleInformation}/>
            <Information data={data} titulos={keys}/>
        </div>
    );
}

export default FormWrap;
