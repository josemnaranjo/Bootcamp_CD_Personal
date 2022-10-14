import React,{useState} from 'react';
import TodoForm from './TodoForm';
import Checklist from './Checklist';


const Wrapper = () => {
    
    const [listado,setListado] = useState([]);

    const agregarTareaAListado = (nuevaTarea) => {
        setListado([...listado,nuevaTarea])
    }

    // console.log(listado[0].tarea);


    return (
        <div>
            <TodoForm agregarTareaAListado={agregarTareaAListado} />
            <Checklist listado={listado} setListado={setListado}/>
        </div>
    );
}

export default Wrapper;
