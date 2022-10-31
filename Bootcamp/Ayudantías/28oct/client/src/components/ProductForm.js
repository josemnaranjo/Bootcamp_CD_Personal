import React from 'react';
import {Formik,Field,Form} from 'formik';
import * as Yup from 'yup';

const ProductForm = (props) => {
    const {nombre,precio,onSubmitProp}= props;


    return (
        <div>

            <Formik
            initialValues={{
                nombre:nombre,
                precio:precio
            }}
            validationSchema={ Yup.object().shape({
                nombre: Yup.string()
                .min(4,"El nombre es muy corto")
                .max(10, "El nombre es muy largo")
                .required("Por favor ingresa un nombre"),

                precio:Yup.number()
                .required("Por favor ingresa un precio")
            })}

            onSubmit={(values, {setSubmittin})=>{
                console.log(values);
                onSubmitProp(values)
            }}

            >
                {({errors,touched,handleSubmit})=>{
                    return(
                        <div>
                            <h2>Formulario de producto</h2>
                            <Form>
                                <label htmlFor='nombre'>Nombre</label>
                                <Field id='nombre' type="text" name="nombre"/>
                                {errors.nombre && touched.nombre && <p>{errors.nombre}</p>}


                                <label htmlFor='precio'>Precio</label>
                                <Field id='precio' type="text" name="precio"/>
                                {errors.precio && touched.precio && <p>{errors.precio}</p>}
                                
                                {/*esto habilita el boton si no hay errores o los campos fueron tocados */}
                                <button type='submit' disabled={Object.values(errors).length>0 || Object.values(touched).length === 0} >ENVIAR</button>
                            </Form>
                        </div>
                    )
                }
                
                }


            </Formik>
            
        </div>
    );
}

export default ProductForm;
