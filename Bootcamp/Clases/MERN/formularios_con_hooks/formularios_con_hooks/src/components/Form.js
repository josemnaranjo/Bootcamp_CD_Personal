import React from 'react';

const Form = ({user,setUserData}) => {
    
    const onChange = (e) =>{
        setUserData({
            //usamos spread para pasar todos los datos de user y luego seleccionamos el elemento a modifica
            ...user,[e.target.name]: e.target.value 
        })
    }


    const createNewUSer = (e) => {
        e.preventDefault();
        }
    
    

    return (
        <div> 
            <form>
                <label htmlFor="">Nombre:</label>
                <input onChange={onChange} type="text" name="nombre"/>

                <label htmlFor="">Apellido:</label>
                <input onChange={onChange} type="text" name="apellido"/>

                <label htmlFor="">Email:</label>
                <input onChange={onChange} type="text" name="email"/>

                <label htmlFor="">Contraseña:</label>
                <input onChange={onChange} type="text" name="password"/>

                <label htmlFor="">Confirm contraseña:</label>
                <input onChange={onChange} type="text" name="confirmPassword"/>
                
            </form>    
        </div>
    );
}

export default Form;
