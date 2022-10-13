import React from 'react';

const RAMCard = (props) => {
    const {personaje,imagen} = props;

    return (
        <div>
            <div>
                <img alt='fotos' src={imagen}/>
                <p>{personaje}</p>
            </div>
        </div>
    );
}

export default RAMCard;
