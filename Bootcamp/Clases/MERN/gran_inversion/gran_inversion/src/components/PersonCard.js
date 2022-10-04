import React from 'react';

const PersonCard = (props) => {
    return (
        <div>
            <h1>{props.lastName} , {props.firstName}</h1>
            <p>Edad: {props.age}</p>
            <p>Color de pelo: {props.hairColor}</p>
        </div>
    );
}

export default PersonCard;
