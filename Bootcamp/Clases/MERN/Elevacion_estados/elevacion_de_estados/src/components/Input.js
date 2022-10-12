import React from 'react';

//como Input es un elemento hijo de Wrapper puede heredar filter y setFilter
const Input = ({filter,setFilter}) => {
    return (
        <input 
            //el value será igual al state filter que ingresemos. O sea, al último valor que este state tome
            value={filter}
            //modificamos el state filter con el método setFilter y le pasamos el valor e.targe.value
            onChange = {e => setFilter(e.target.value)}
        />
    );
}

export default Input;
