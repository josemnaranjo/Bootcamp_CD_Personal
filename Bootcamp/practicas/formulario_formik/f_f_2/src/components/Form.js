import React from 'react';
import { Formik, Field,Form } from 'formik';
import * as Yup from 'yup';
import './Form.css'

const Formulario = (props) => {
    const {firstName,lastName,email,passWord,confirmPassword, onSubmitProp} =props; 
    

    return (
        <div>
            <h1>Formulario práctica</h1>
            <Formik initialValues={
                {
                    firstName:firstName,
                    lastName:lastName,
                    email:email,
                    passWord:passWord,
                    confirmPassword:confirmPassword
                }
            }

            
            validationSchema={Yup.object().shape({
                firstName:Yup.string()
                .min(4,"Muy corto!")
                .max(15,"El nombre es muy largo")
                .required("Este campo es obligatorio"),

                lastName: Yup.string()
                .min(6,"Muy corto!")
                .max(10,"Muy largo!")
                .required("Este campo es obligatorio")
            })}

            

            
            onSubmit={(values,{setSubmitting})=> {
                console.log("informacion del formulario", values);
                onSubmitProp(values);
            }}
            >
            {({errors,touched,handleSubmit})=>{
                return(
                <Form onSubmit={handleSubmit}>
                    <h1>Formulario de registro</h1>
                    <div>
                        <label htmlFor='firstName'>Nombre:</label>
                        <Field id="firstName" type="text" name="firstName" placeholder="Nombre" className="nombre"/>
                        {errors.firstName && touched.firstName ? (
                            <div>{errors.firstName}</div>
                        ): null}
                    </div>
                    
                    <div>
                        <label htmlFor='lastName'>Apellido:</label>
                        <Field type='text' name='lastName' placeholder='Apellido'/>
                        {errors.lastName && touched.lastName ? (
                            <div>{errors.lastName}</div>
                        ): null}
                    </div>
                    
                    <div>
                        <label htmlFor='email'>Correo electrónico:</label>
                        <Field type='text' name='email' placeholder='Correo electrónico'/>
                    </div>
                    
                    <div>
                        <label htmlFor='passWord'>Contraseña:</label>
                        <Field type='password' name='passWord' placeholder='Contraseña'/>
                    </div>
                    
                    <div>
                        <label htmlFor='confirmPassword'>Confirma contraseña:</label>
                        <Field type='password' name='confirmPassword' placeholder='Confirma tu contraseña'/>
                    </div>
                    <button type='submit'>Enviar datos</button>
                </Form>
            )}}
            </Formik>
        </div>
    );
}

export default Formulario;

