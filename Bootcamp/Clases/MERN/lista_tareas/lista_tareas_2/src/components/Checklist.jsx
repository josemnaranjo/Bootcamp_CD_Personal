import React from 'react';
import Checkboxes from './Checkboxes';


const Checklist = (props) => {
    const {listado,setListado} = props;

    const eliminarTareas = () => {
        const listaTareasNoTerminadas = listado.filter(tarea => !tarea.done);
        setListado(listaTareasNoTerminadas);
    }

    
    const marcarCheck = (e) => {
        console.log(e.target)
        const {name, checked} = e.target;
        const actualizarTarea = listado.map((tarea)=>(
            { ...tarea, done: tarea.id === name ? checked : tarea.done, 
        }));
        setListado(actualizarTarea);
    };
    

    const checkeado = listado.map((tarea,i)=>{
        return <Checkboxes data={tarea} key={i} onChange={marcarCheck}/>
    });


    return (
        <div>
            {listado.length ? checkeado : "no hay tareas"}
            {listado.length ? (
                <button onClick={eliminarTareas}>Borrar tareas terminadas</button>
            ): null}
        </div>
    );
}

export default Checklist;
