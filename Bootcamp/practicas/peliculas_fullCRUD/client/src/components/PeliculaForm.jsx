import React from 'react';
import {Formik,Form, Field} from 'formik'
import * as Yup from 'yup';
import moment from 'moment';

const PeliculaForm = (props) => {

    const {titulo,duracion,actor1, actor2, rating,comentario,onSubmitProp} = props;

    // const valSchema = Yup.object().shape({
    //     titulo: Yup.string()
    //     .min(1,"Debes ingresar un titulo mayo a un caracter")
    //     .required("Este campo es obligatorio"),

    //     // duracion: Yup.number()
    //     // .min(1,"La duración debe ser mayo a 1")
    //     // .required("La duración es obligatoria"),

    //     actor1: Yup.string()
    //     .required("Debes ingresar por lo menos un actor"),

    //     actor2: Yup.string()
    //     .required("Debes ingresar por lo menos un actor"),

    //     fechaDeEstreno: Yup.date()
    //     .required("debes ingresar una fecha de estreno"),

    //     rating: Yup.number()
    //     .required("Debes ingresar una puntuación"),

    //     comentario: Yup.string()
    //     .min(5,"Tu comentario debe ser más largo")
    //     .required("Debes ingresar un comentario")
    // })


    return (
        <div>
            <Formik
            initialValues={{
                titulo:titulo,
                duracion:duracion,
                actor1:actor1,
                actor2:actor2,
                fechaDeEstreno: moment().format("YYYY-MM-DD"),
                rating:rating,
                comentario:comentario
            }}
            // validationSchema={valSchema}
            enableReinitialize
            onSubmit={(values,{setSubmitting})=>{
                console.log(values);
                onSubmitProp(values)
            }}
            >
            {({errors,touched})=>(
                <Form>
                    <div>
                        <label htmlFor='titulo'>Titulo de la pelicula</label>
                        <Field type='text' name='titulo'/>
                        {errors.titulo && touched.titulo ? <p>{errors.titulo}</p> : null }
                    </div>

                    <div>
                        <label htmlFor='duracion'>Duracion (en minutos)</label>
                        <Field type='number' name='duracion'/>
                        {/* {errors.duracion && touched.duracion ? <p>{errors.duracion}</p> : null } */}
                    </div>

                    <div>
                        <label htmlFor='actor1'>Actor 1</label>
                        <Field type='text' name="actor1"/>
                        {errors.actor1 && touched.actor1 ? <p>{errors.actor1}</p> : null }
                    </div>
                    <div>
                        <label htmlFor='actor2'>Actor 2</label>
                        <Field type='text' name="actor2"/>
                        {errors.actor2 && touched.actor2 ? <p>{errors.actor2}</p> : null }
                    </div>

                    <div>
                        <label htmlFor='fechaDeEstreno'>Fecha de estreno</label>
                        <Field type='date' name='fechaDeEstreno'/>
                        {errors.fechaDeEstreno && touched.fechaDeEstreno ? <p>{errors.fechaDeEstreno}</p> : null }
                    </div>

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

                    <button type='submit' className='btn btn-success' >Crear pelicula</button>
                </Form>
            )}
            </Formik>
        </div>
    );
}

export default PeliculaForm;
