import React from 'react';
import {Formik,Form,Field} from 'formik';
import * as Yup from 'yup';

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

            validationSchema = { Yup.object().shape({
                firstName: Yup.string()
                .min(2,"El nombre debe ser más largo que 2 caracteres")
                .max(20,"El nombre debe ser más corto que 20 caracteres")
                .required("Este campo es obligatorio"),

                lastName: Yup.string()
                .min(2,"El apellido debe ser más largo que 2 caracteres")
                .max(20,"El apellido debe ser más corto que 20 caracteres")
                .required("Este campo es obligatorio"),


                email: Yup.string()
                .email("El formato de correo no es correcto")
                .required("Este campo es obligatorio"),


                password: Yup.string()
                .required("La contraseña es obligatoria")
                .equals([Yup.ref('confirmPassword'),null],"Las contraseñas no son iguales")
                .min(8,"La contraseña debe tener al menos 8 caracteres"),

                confirmPassword: Yup.string()
                .required("La contraseña es obligatoria")
                .equals([Yup.ref('password'),null],"Las contraseñas no son iguales")
                .min(8,"La contraseña debe tener al menos 8 caracteres"),
            })
        }

            onSubmit={(values,{setSubmmiting})=>{
                onSubmitProps(values);
            }}
            >
                {({errors, touched, handleSubmit})=>{
                    return(
                        <Form onSubmit={handleSubmit}>

                            <div>
                                <label htmlFor='firstName'>Nombre: </label>
                                <Field type="text" name="firstName"></Field>
                                {touched.firstName && errors.firstName && <div>{errors.firstName}</div>}
                            </div>
                            
                            <div>
                                <label htmlFor="lastName">Apellido: </label>
                                <Field type="text" name="lastName"></Field>
                                {touched.lastName && errors.lastName && <div>{errors.lastName}</div>}
                            </div>

                            <div>
                                <label htmlFor='email'>Correo electrónico: </label>
                                <Field type="email" name="email"></Field>
                                {touched.email && errors.email && <div>{errors.email}</div>}
                            </div>

                            <div>
                                <label htmlFor='password'>Contraseña: </label>
                                <Field type="password" name="password"></Field>
                                {touched.password && errors.password && <div>{errors.password}</div>}
                            </div>

                            <div>
                                <label htmlFor='confirmPassword'>Confirma contraseña: </label>
                                <Field type="password" name="confirmPassword"></Field>
                                {touched.confirmPassword && errors.confirmPassword && <div>{errors.confirmPassword}</div>}
                            </div>

                        <button type='submit'>Enviar informacion</button>
                        </Form>
                    )
                }}

            </Formik>
        </div>
    );
}

export default Formulario;
