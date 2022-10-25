import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Main = ()=>{


    const [mensaje,setMensaje]=useState("Cargando...");
    useEffect(()=>{
        axios.get('http://localhost:8000/api')
            .then(res=>setMensaje(res.data.mensaje))
    },[]);
    return(
        <div> Mensaje desde backend: {mensaje}</div>
    )
}

export default Main