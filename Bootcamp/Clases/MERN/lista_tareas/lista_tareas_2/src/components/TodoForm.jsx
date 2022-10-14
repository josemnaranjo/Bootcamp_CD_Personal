import React, {useState} from 'react';

const TodoForm = (props) => {
    const {agregarTareaAListado} = props;
    const [tarea,setTarea]= useState("");

    

    const handleSubmit = (e)=> {
        e.preventDefault();
        agregarTareaAListado({
            done: false,
            id:tarea+Math.random()*10,
            tarea
        })
        setTarea("");
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' value={tarea} onChange={e=>setTarea(e.target.value)}/>
                <button >Agregar tarea</button>
            </form>
        </div>
    );
}

export default TodoForm;
