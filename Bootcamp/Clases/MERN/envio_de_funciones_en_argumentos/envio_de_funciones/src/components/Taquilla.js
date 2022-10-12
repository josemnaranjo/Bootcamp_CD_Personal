import React from 'react';

const Taquilla = (props) => {
    const {peliculas} = props;
    
    //creamos una funcion para manejar el click
    const onClickHandler = (e,value)=>{
        alert(value);
    }

    //map crea cada uno de los botones con las peliculas del array
    return peliculas.map((item,index)=>{
        //a los botones creados, le paso la funcion definida en linea 7 y como argumento "value" le paso el item
        return <button onClick={(e)=>onClickHandler(e,item)} key={index}>{item}</button>
    })
    
}

export default Taquilla;
