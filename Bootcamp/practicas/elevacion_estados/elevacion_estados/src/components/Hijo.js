import React from 'react';

const Hijo = ({count, titulo, sumar,restar}) => {
    return (
        <div>
            <h1>{titulo}</h1>
            <h2>{count}</h2>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
        </div>
    );
}

export default Hijo;
