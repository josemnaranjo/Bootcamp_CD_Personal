import React from 'react';

const Checkboxes = (props) => {
    const{ data: {done,id,tarea}, onChange} = props;

    return (
        <div>
            <p style={done ? {textDecoration:"line-through"} : {textDecoration:"none"} }>{tarea}</p>
            <input type="checkbox" defaultChecked={done} name={id} onChange={onChange}/>
        </div>
    );
}

export default Checkboxes;
