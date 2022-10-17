import React from 'react';
import Checkbox from './Checkbox';

const TaskList = (props) => {

    const {lista,setLista} = props;

    //esta funcion actualiza el "done" a true cuando marcamos el checkbox
    const onchangeStatus = e =>{
        console.log(e.target);
        const {name, checked} = e.target;
        const updateList = lista.map(tarea =>({
                    //esta parte hace que solo la tarea checkeada se actualice
            ...tarea, done: tarea.id === name ? checked : tarea.done
        }));
        setLista(updateList)
    };

    const onClickRemoveTarea = e =>{
        //el filter devolvera una array con las tareas que tengan valor verdadero,
        //en este caso, ! hace que los valores true sean falsos y viceversa. 
        // Entonces, se devolverá un arreglo con los valores falsos convertidos a verdaderos
        const updateList = lista.filter(tarea => !tarea.done);
        setLista(updateList);
    }

    const chk = lista.map((tarea) => {
     return <Checkbox key={tarea.id} data={tarea} onchangeStatus={onchangeStatus}/>
})


    return (
        <div>
           {lista.length ? chk : "no hay tareas"}
           {lista.length ? (
            <p>
                <button onClick={onClickRemoveTarea}>
                    Borrar todas las tareas hechas
                </button>
            </p>
           ): null}
        </div>
    );
}

export default TaskList;
