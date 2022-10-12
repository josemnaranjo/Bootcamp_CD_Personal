import React from 'react';
import Taquilla from '../components/Taquilla';

const Wrapper = () => {
    const peliculas = ["Spider-man", "Star Wars", "Predator","Smile","El exorcista"];

    return (
        <div>
            <Taquilla peliculas={peliculas}/>
        </div>
    );
}

export default Wrapper;
