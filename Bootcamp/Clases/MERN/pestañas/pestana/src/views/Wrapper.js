import React from 'react';
import Pestana from '../components/Pestana';

const Wrapper = () => {
    const arr = [
        {tab1:"Tab 1",content0:"Este es el contenido del tab1"},
        {tab2:"Tab 2",content1:"Este es el contenido del tab2"},
        {tab3:"Tab 3",content2:"Este es el contenido del tab3"}
    ]
    return (
        <div>
            <Pestana info={arr}/>
        </div>
    );
}

export default Wrapper;

