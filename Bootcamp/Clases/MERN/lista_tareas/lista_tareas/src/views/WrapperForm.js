import React, {useState} from 'react';
import TaskList from '../components/TaskList';
import TaskWritter from '../components/TaskWritter';


const WrapperForm = () => {
    
    const [lista,setLista] = useState([]);
    
    const handleAddItem = addItem =>{
        setLista([...lista,addItem]);
    }
    return (
        <div>
            WrapperForm!
            <TaskWritter handleAddItem={handleAddItem}  />
            <TaskList lista={lista} setLista={setLista}/>
        </div>
    );
}

export default WrapperForm;
