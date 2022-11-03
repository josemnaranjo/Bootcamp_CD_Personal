import React from 'react';
import Formulario from '../Components/Formulario';
import {createUser} from '../services/fk-services';

const FormWrapp = () => {
    const onSubmitProps= async (values)=>{
        try{
            const newUser = await createUser(values);
            console.log("Se ha creado el nuevo usuario ",newUser);
        }catch(err){
            console.log(err);
        }

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
