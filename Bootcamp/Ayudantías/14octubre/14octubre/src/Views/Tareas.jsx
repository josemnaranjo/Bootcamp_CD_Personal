import React, { useState } from 'react';

const Tareas = (props) => {
    const [tareas, setTareas] = useState([]);
    const [nuevaTarea, setNuevaTareas] = useState("")
    return (
        <div>
            <form onSubmit={agregarTarea}>

            </form>
        </div>
    );
}

export default Tareas;
