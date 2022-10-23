import React from 'react';
import {Formik,Form,Field} from 'formik';

const Formulario = (props) => {
    const {firstName,lastName,email, password, confirmPassword,onSubmitProps} = props;
    return (
        <div>
            <Formik
            initialValues={{
                firstName:firstName,
                lastName:lastName,
                email:email,
                password:password,
                confirmPassword:confirmPassword
            }}

            onSubmit={(values,{setSubmmiting})=>{
                console.log(values);
                onSubmitProps(values);
            }}
            >
                {({handleSubmit})=>{
                    return(
                        <Form onSubmit={handleSubmit}>
                            <label htmlFor='firstName'>Nombre:</label>
                            <Field type="text" name="firstName"></Field>


                        </Form>
                    )
                }}

            </Formik>
        </div>
    );
}

export default Formulario;
