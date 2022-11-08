import React from 'react';
import {Formik,Form, Field, FieldArray} from 'formik'
import * as Yup from 'yup' 
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


;

const NoteForm = (props) => {
    const{rating,comentario,onSubmitProp}=props;

    const valSchema = Yup.object().shape({
        rating: Yup.number()
        .required("Esta campo es obligatorio"),

        comentario: Yup.string()
        .min(8,"El contenido de la reseña es muy corto")
        .required("Este campo es obligatorio")

    })
    return (
        <div><Navbar bg='light'>
        <Container>
            <Navbar.Brand href='/'>PokeApp</Navbar.Brand>
        </Container>
    </Navbar>
            <h1>Cuentanos más de tu pokemon</h1>
            <Formik
            initialValues={{
                rating:rating,
                comentario:comentario
            }}
            validationSchema = {valSchema}
            onSubmit={onSubmitProp}
            enableReinitialize
            >
            {({errors,touched,values})=>(
                <Form>
                    <div>
                        <label htmlFor='rating'>Rating del pokemon</label>
                        <Field id="rating" type="number" as="select" className="form-select" name="rating">
                            <option value={1}>1 Estrella</option>
                            <option value={2}>2 Estrellas</option>
                            <option value={3}>3 Estrellas</option>
                            <option value={4}>4 Estrellas</option>
                            <option value={5}>5 Estrellas</option>
                        </Field>
                        {errors.rating && touched.rating ? <p>{errors.rating}</p> : null }
                    </div>

                    <div>
                        <label htmlFor='comentario'>Nombre del comentario: </label>
                        <Field type='text' name='comentario' as="textarea"/>
                        {errors.comentario && touched.comentario ? <p>{errors.comentario}</p> : null }
                    </div>
                    <button type='submit' disabled={Object.values(errors).length>0 || Object.values(touched).length===0}>Crear pokemon</button>
                </Form>
            )}
            </Formik>
        </div>
    );
}

export default NoteForm;
