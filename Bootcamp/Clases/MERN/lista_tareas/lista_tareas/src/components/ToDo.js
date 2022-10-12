import React, {useState} from 'react';
import './ToDo.css'

const ToDo = () => {
    const [tareas, setTareas] = useState([]);
    const[tarea,setTarea] = useState("");
    const[isChecked, setIsChecked] = useState(false);

    const agregarTarea = (e) => {
        setTarea(e.target.value);
    }

    const crearPendiente = () => {
        tareas.push(tarea);
        setTarea("");
        console.log(tareas);
    }

    const marcarTarea = (valor) => {
        setIsChecked(valor);
    }

    return (
        <div>
            <div>
                <input type='text' name='tareas' onChange={agregarTarea} value={tarea}/>
                <button onClick={crearPendiente} >Add</button>
            </div>
            <div>
                {
                    tareas?.map((t,i)=>
                    <div key={i}>
                        <p className={`${isChecked ? "marcado" : "" }`}>{t}</p>
                        <input type="checkbox" onChange={ (e) => marcarTarea(e.target.checked)}/>
                        <button>Borrar</button>
                    </div>
                    )
                }
            </div>
        </div>
    );
}

export default ToDo;
