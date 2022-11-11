import React from 'react';
import {Formik,Form, Field} from 'formik'
import * as Yup from 'yup';

const NoteForm = (props) => {
    const {rating,comentario, onSubmitProp} = props;

    const valSchema = Yup.object().shape({
    
        rating: Yup.number()
        .required("Debes ingresar una puntuación"),

        comentario: Yup.string()
        .min(5,"Tu comentario debe ser más largo")
        .required("Debes ingresar un comentario")
    })

    return (
        <div>
            <Formik
            initialValues={{
                rating:rating,
                comentario:comentario
            }}
            validationSchema={valSchema}
            enableReinitialize
            onSubmit={(values,{setSubmitting})=>{
                console.log(values);
                onSubmitProp(values)
            }}
            >
            {({errors,touched})=>(
                <Form>
                
                    <div>
                        <label htmlFor='rating'>Puntuacion</label>
                        <Field type='number' name='rating' id='rating' as='select' className='form-select'>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </Field>
                        {errors.rating && touched.rating ? <p>{errors.rating}</p> : null }
                    </div>

                    <div>
                        <label htmlFor='comentario'>Nombre del comentario: </label>
                        <Field type='text' name='comentario' as="textarea"/>
                        {errors.comentario && touched.comentario ? <p>{errors.comentario}</p> : null }
                    </div>

                    <button type='submit' className='btn btn-success'>Crear comentario</button>
                </Form>
            )}
            </Formik>
            
        </div>
    );
}

export default NoteForm;
