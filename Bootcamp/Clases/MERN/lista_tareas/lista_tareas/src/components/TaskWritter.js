import React,{useState} from 'react';

const TaskWritter = (props) => {

    const {handleAddItem} = props;
    const [tarea,setTarea] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        handleAddItem(
            {
            done: false,
            id:(+new Date()).toString(),
            tarea
        });
        setTarea("");
        }


    return (
        <div>
            TaskWritter!

            <form onSubmit={handleSubmit}>
                <input type="text" onChange={e=> setTarea(e.target.value)} value={tarea}/>
                <button type='submit' disabled={tarea ? "":"disabled"}>Agregar tarea</button>
            </form>
        </div>
    );
}

export default TaskWritter;
