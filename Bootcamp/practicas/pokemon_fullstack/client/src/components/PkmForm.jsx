import React, {useState,useEffect} from 'react';
import {Formik,Form, Field, FieldArray} from 'formik'
import * as Yup from 'yup' 
import { createPokemon } from '../services/pokemon.services';
import { useNavigate, useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { findOnePokemon, getNotesFromPokemon } from '../services/pokemon.services';



const PkmForm = () => {

    const {id}= useParams();

    const [pokemon,setPokemon]=useState({
        pokemon:"",
        entrenador:"",
        tipos: [],
        rating:"",
        comentario:""
    })
    const valSchema = Yup.object().shape({
        pokemon: Yup.string()
        .min(1,"Debes ingresar un nombre")
        .required("Este campo es obligatorio"),
        
        entrenador: Yup.string()
        .required("Este campo es obligatorio"),

        rating: Yup.number()
        .required("Esta campo es obligatorio"),

        comentario: Yup.string()
        .min(8,"El contenido de la reseña es muy corto")
        .required("Este campo es obligatorio")

    })
    const navigate = useNavigate();

    const getPokemonFromService = async()=>{
        const pokemon = await findOnePokemon(id);
        // console.log(pokemon.data)
        setPokemon(pokemon.data)
    }

    const createPokemonFromService = async (pokemon) =>{
        try{
            const newPokemon = await createPokemon(pokemon);
            console.log(newPokemon.data);
            setPokemon({...newPokemon.data})
            navigate('/')
        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        id && getPokemonFromService()
    }, []);
    
    return (
        <div><Navbar bg='light'>
        <Container>
            <Navbar.Brand href='/'>PokeApp</Navbar.Brand>
        </Container>
    </Navbar>
            <h1>¡Un pokemon salvaje ha aparecido!</h1>
            <Formik
            initialValues={pokemon}
            validationSchema = {valSchema}
            onSubmit={createPokemonFromService}
            enableReinitialize
            >
            {({errors,touched,values})=>(
                <Form>
                    <div>
                        <label htmlFor='pokemon'>Nombre del pokemon: </label>
                        <Field type='text' name='pokemon' />
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

export default PkmForm;
