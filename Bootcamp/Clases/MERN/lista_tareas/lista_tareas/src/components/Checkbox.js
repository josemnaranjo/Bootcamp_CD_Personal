import React from 'react';

const Checkbox = (props) => {
    const {
        onchangeStatus, 
        data:{id,tarea,done}
    } = props;


    return (
        <div>
            <input
                type="checkbox"
                name={id}
                defaultChecked={done}
                onChange={onchangeStatus}
            />
            <div>{tarea}</div>
        </div>
    );
}

export default Checkbox;
