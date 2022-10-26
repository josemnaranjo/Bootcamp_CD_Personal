import React, {useState} from 'react';
import axios from 'axios';

const PersonForm = () => {
    const [firstName, setFirstName]= useState("");
    const [lastName,setLastName]= useState("");


    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/people',{
            firstName,
            lastName
        })
        .then(res=>console.log(res))
        .catch(err=> console.log(err))
        setFirstName("");
        setLastName("")
    }
    
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label htmlFor='firstName'>Nombre:</label>
                    <input type='text' value={firstName} onChange={e=> setFirstName(e.target.value)}/>
                </p>
                <p>
                    <label htmlFor='lastName'>Apellido:</label>
                    <input type='text' value={lastName} onChange={e=>setLastName(e.target.value)}/>
                </p>
                <button type='submit'>Enviar información</button>            
            </form>        
        </div>
    );
}

export default PersonForm;
