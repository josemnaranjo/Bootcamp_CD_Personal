import React from 'react';
import Formulario from '../components/Formulario';

const FormWrapper = () => {
    const onSubmitProp = (values)=>{
        console.log("Se ha creado el usuario",values)
    }
    return (
        <div>
            <Formulario
            firstName='' 
            lastName=''
            email=''
            passWord=''
            confirmPassword=''
            onSubmitProp={onSubmitProp}>
            </Formulario>
           
        </div>
    );
}

export default FormWrapper;
