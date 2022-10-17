import React from 'react';
//importamos formik
import { Formik,Field,Form } from 'formik';
//importamos TODO de yup, que nos permite manejar los errores
import * as Yup from 'yup';

const RegisterForm = (props) => {
    //SE IMPORTAN LOS PROPS DESDE EL COMPONENTE PADRE REGISTER
    const {firstName,lastName,email,rut,password,confirmPassword,onSubmitProp} = props;
    return (
        <div>
            <Formik initialValues={
                {
                    firstName: firstName,
                    lastName: lastName,
                    email:email,
                    rut:rut,
                    password:password,
                    confirmPassword:confirmPassword
                }
            }

            //la parte de las validaciones
            validationSchema={Yup.object().shape({
                firstName:Yup.string()
                .min(4,"El nombre es muy corto")
                .max(15,"El nombre es muy largo")
                .required("Por favor ingresa tu nombre"),

                lastName:Yup.string()
                .min(4,"El apellido es muy corto")
                .max(15,"El apellido es muy largo")
                .required("Por favor ingresa tu apellido"),

                email:Yup.string()
                .email("El formato del correo no es valido")
                .required("El correo es obligatorio"),

                rut:Yup.string()
                .matches(/^[0-9]+[-|-]{1}[0-9K]$/,"El formato del rut no es valido")
                .required("el rut es obligatorio"),

                password:Yup.string()
                .required("La contraseña es obligatoria")
                .equals([Yup.ref('confirmPassword'),null],"Las contraseñas no son iguales")
                .min(8,"La contraseña debe tener al menos 8 caracteres"),

                confirmPassword:Yup.string()
                .required("La confirmación de la contraseña es obligatoria")
                .equals([Yup.ref('password'),null],"Las contraseñas no son iguales"),
            })}
            
            //FUNCION PARA MANEJAR EL ENVIO DEL FORMULARIO
            onSubmit={(values,{setSubmitting})=>{
                console.log("Info del formulario: ",values);
                onSubmitProp(values);
            }}
            >
            

            {/*LA PARTE DE CREACIÓN DEL FORMULARIO, USAMOS FIELD EN VEZ DE INPUT*/}
            {({errors,touched,handleSubmit})=>{
                    return(
                        <div>
                            <h2>Formulario de registro</h2>
                            <Form onSubmit={handleSubmit}>
                                <label htmlFor='firstName'>Nombre:</label>
                                <Field id="firstName" type="text" placeholder="ingresa nombre" name="firstName" className="form-control"/>
                                {/*SI EXISTEN ESTAS CONDICIONES MUESTRAME EL ERROR DEL KEY FIRSTNAME */}
                                {errors.firstName && touched.firstName && <p>{errors.firstName}</p>}
                                
                                <label htmlFor='lastName'>Apellido:</label>
                                <Field id="lastName" type="text" placeholder="ingresa apellido" name="lastName" className="form-control"/>
                                {errors.lastName && touched.lastName && <p>{errors.lastName}</p>}
                                
                                <label htmlFor='email'>Correo electrónico:</label>
                                <Field id="email" type="email" placeholder="ingresa tu correo" name="email" className="form-control"/>
                                {errors.email && touched.email && <p>{errors.email}</p>}
                                
                                <label htmlFor='rut'>Rut (sin puntos, con guion):</label>
                                <Field id="rut" type="text" placeholder="ingresa rut" name="rut" className="form-control"/>
                                {errors.rut && touched.rut && <p>{errors.rut}</p>}
                                
                                <label htmlFor='password'>Contraseña:</label>
                                <Field id="password" type="password" placeholder="ingresa contraseña" name="password" className="form-control"/>
                                {errors.password && touched.password && <p>{errors.password}</p>}
                                
                                <label htmlFor='confirmPassword'>Confirma contraseña:</label>
                                <Field id="confirmPassword" type="password" placeholder="ingresa confirmacion de contraseña" name="confirmPassword" className="form-control"/>
                                {errors.confirmPassword && touched.confirmPassword && <p>{errors.confirmPassword}</p>}

                                {/*evitamos que el boton se habilite se existen errores o ningun campo haya sido tocado*/}
                                <button type='submit' disabled={Object.values(errors).length>0 || Object.keys(touched).length === 0 } >REGISTRARSE</button>
                            </Form>
                        </div>
                    )
                }}
            </Formik>
        </div>
    );
}

export default RegisterForm;
