import React, {useState} from 'react';


const OtroHijo = () => {
    const [aux,setCount] = useState({
        count:0,
        name:"Prueba",
    });

    function sumar() {
        setCount({ ...aux,
            count: aux.count+1,
            hola: "Hola"
        })
        console.log(aux);
    }

    function restar() {
        setCount({
            count: aux.count-1
        });
    }
    return (
        <div>
            <h1>Titulo de hijo sin herencia y count como objeto</h1>
            <h2>{aux.count} {aux.hola}</h2>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
        </div>
    );
}

export default OtroHijo;
