import React, { useState } from 'react';

const Tarea = (props) => {
    
    const{description} =props;
    const [terminada, setTerminada] = useState(false);


    function cambiarEstado(e){
        setTerminada(e.target.checked);

    }

    return (
        <div>
            <h2 style={terminada ? {textDecoration:"line-through"} : {textDecoration:"none"} }>{description}</h2>
            {/* <h2 className={`${terminada ? "terminada":""}`}>{description}</h2> */}
            <input type='checkbox' onChange={cambiarEstado}></input>
        </div>
    );
}

export default Tarea;
