import React from 'react';
import {Formik,Form, Field, FieldArray} from 'formik'
import * as Yup from 'yup' 
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



const PkmInfoForm = (props) => {
    const{pokemon,entrenador,tipos, onSubmitProp}=props;

    const valSchema = Yup.object().shape({
        pokemon: Yup.string()
        .min(1,"Debes ingresar un nombre")
        .required("Este campo es obligatorio"),
        
        entrenador: Yup.string()
        .required("Este campo es obligatorio"),
    })

    return (
        <div><Navbar bg='light'>
        <Container>
            <Navbar.Brand href='/'>PokeApp</Navbar.Brand>
        </Container>
    </Navbar>
            <h1>¡Edita tu pokemon!</h1>
            <Formik
            initialValues={{
                pokemon:pokemon,
                entrenador:entrenador,
                tipos:tipos,
            }}
            validationSchema = {valSchema}
            onSubmit={onSubmitProp}
            enableReinitialize
            >
            {({errors,touched,values})=>(
                <Form>
                    <div>
                        <label htmlFor='pokemon'>Nombre del pokemon: </label>
                        <Field type='text' name='pokemon'/>
                        {errors.pokemon && touched.pokemon ? <p>{errors.pokemon}</p> : null }
                    </div>

                    <div>
                        <label htmlFor='entrenador'>Nombre del entrenador: </label>
                        <Field type='text' name='entrenador' />
                        {errors.entrenador && touched.entrenador ? <p>{errors.entrenador}</p> : null }
                    </div>

                    <div>
                        <FieldArray
                        name='tipos'
                        render={arrayHelpers=>(
                        <div>
                            {values.tipos && values.tipos.length>0 ? (
                                values.tipos.map((tipo,i)=>(
                                    <div key={i}>
                                        <Field name={`tipos.${i}`}/>
                                        <button
                                        type='button'
                                        onClick={()=>arrayHelpers.remove(i)}
                                        >
                                            -
                                        </button>
                                        <button
                                            type='button'
                                            onClick={()=>arrayHelpers.insert(i,'')}
                                        >
                                            +
                                        </button>
                                    </div>
                                ))
                            ) : (
                                <button
                                type='button'
                                onClick={()=>arrayHelpers.push('')}
                                >
                                    Agregar tipo
                                </button>
                            )}
                        </div>)}>
                        </FieldArray>
                    </div>
                    <button type='submit' disabled={Object.values(errors).length>0 || Object.values(touched).length===0}>Editar pokemon</button>
                </Form>
            )}
            </Formik>
        </div>
    );
}

export default PkmInfoForm;
