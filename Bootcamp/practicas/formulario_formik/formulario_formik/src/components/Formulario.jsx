import React from 'react';
import { Formik, Field,Form } from 'formik';
import * as Yup from 'yup';

const Formulario = (props) => {
    const {firstName,lastName,email,passWord,confirmPassword, onSubmitProp} =props; 
    

    return (
        <div>
            <h1>Formulario práctica</h1>
            <Formik initialValues={{
                firstName:firstName,
                lastName:lastName,
                email:email,
                passWord:passWord,
                confirmPassword:confirmPassword
            }}
            validationSchema={Yup.object().shape({
                firstName:Yup.string()
                .min(3,"El nombre es muy corto")
                .max(10,"El nombre es muy largo")
                .required("Este campo es obligatorio"),

                lastName:Yup.string()
                .min(3,"El apellido es muy corto")
                .max(9,"El apellido es muy largo")
                .required("Este campo es obligatorio"),

                email:Yup.string()
                .email("El formato de correo no es correcto")
                .required("Este campo es obligatorio"),

                passWord:Yup.string()
                .required("Este campo es obligatorio")
                .equals([Yup.ref(confirmPassword),null],"Las contraseñas deben coincidir"),

                confirmPassword:Yup.string()
                .required("Este campo es obligatorio")
                .equals([Yup.ref(passWord),null],"Las constraseñas deben coincidir")

            })}

            onSubmit={(values,{setSubmitting})=> {
                console.log("informacion del formulario", values);
                onSubmitProp(values);
            }}
            >
            {({errors,touched,handleSubmit}) => {
                return ( 
                    <Form onSubmit={handleSubmit}>
                    <h1>Formulario de registro</h1>
                    <div>
                        <label htmlFor='firstName'>Nombre:</label>
                        <Field type='text' name='firstName' placeholder='Nombre'/>
                        {errors.firstName && touched.firstName ? (
                            <div>{errors.firstName}</div>
                        ): null}
                    </div>
                    
                    <div>
                        <label htmlFor='lastName'>Apellido:</label>
                        <Field type='text' name='lastName' placeholder='Apellido'/>
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
                )
            }}
            
                
            </Formik>
        </div>
    );
}

export default Formulario;
