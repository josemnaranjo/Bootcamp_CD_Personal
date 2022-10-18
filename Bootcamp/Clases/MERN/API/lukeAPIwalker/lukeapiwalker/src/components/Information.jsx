import React from 'react';

const Information = ({data,titulos} ) => {
    
    return (
        <div>
            <h1>{data[0]}</h1>
            <p>{titulos[1]}: {data[1]}</p>
            <p>{titulos[2]}: {data[2]}</p>
            <p>{titulos[3]}: {data[3]}</p>
        </div>
    );
}

export default Information;
