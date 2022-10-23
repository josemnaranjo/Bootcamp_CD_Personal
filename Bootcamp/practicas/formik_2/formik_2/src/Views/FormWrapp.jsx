import React from 'react';
import Formulario from '../Components/Formulario';

const FormWrapp = () => {
    const onSubmitProps= (values)=>{
        console.log("Se ha creado el usuario ",values);
    }
    
    return (
        <div>
            <Formulario 
            firstName=""
            lastName=""
            email=""
            password=""
            confirmPassword=""
            onSubmitProps={onSubmitProps}
             />
        </div>
    );
}

export default FormWrapp;
