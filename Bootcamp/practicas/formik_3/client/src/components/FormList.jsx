import React, {useState,useEffect} from 'react';
import {Formik, Form, Field} from 'formik'
import * as Yup from 'yup'
import { useNavigate } from "react-router-dom";
import { createProduct, updateProduct } from '../services/product-services';
import { findOne } from '../services/product-services';
import { useParams } from 'react-router-dom';


const FormList = () => {
    const navegate = useNavigate();
    const {id} = useParams();
    const [product,setProduct]=useState({
        nombre:'',
        descripcion:'',
        cantiad:0
    })

    const getOneProductFromService = async ()=>{
        try{
            const productToUpdate = await findOne(id);
            setProduct({...productToUpdate})
        }catch(err){
            console.log(err)
        }
    }


    const createNewProductFromService = async (product)=>{
        try{
            const newProduct = id ? updateProduct(product,id) : await createProduct(product);
           setProduct(newProduct);
           alert("Producto creado con exito");
           navegate('/')
        }catch(err){
            console.log(err);
            alert('Ups algo ha salido mal')
        }
    }

    useEffect(() => {
       getOneProductFromService();
    }, []);

    
    return (
        <div>
            <h1>Agregar producto a inventario</h1>
            <Formik
                enableReinitialize
                
                initialValues={product}

                validationSchema= {
                    Yup.object().shape({
                        nombre: Yup.string()
                            .required("Debe ingresar un nombre del producto"),
                
                        descripcion: Yup.string()
                            .max(10, "La descripción no debe ser mayor a 10 caracteres")
                            .required("Debe ingresar una breve descripcion del producto"),
                
                        cantidad: Yup.number()
                            .min(0,"No puedes ingresar 0 productos al inventario")
                            .max(1000, "No puedes ingresar más de 1000 artículos de un solo producto al inventario")
                            .required("Debe ingresar cantidad entre 1 y 999 de producto")
                        })
                }
            onSubmit={
                values=> createNewProductFromService(values)
            }
            >
                {({errors,touched})=>(
                    <Form>

                        <label htmlFor='nombre'>Nombre del producto</label>
                        <Field type='text' id='nombre' name='nombre'/>
                        {errors.nombre && touched.nombre ? <p>{errors.nombre}</p>: null}

                        <label htmlFor='descripcion'>Breve descripción del producto: </label>
                        <Field type='text' id='descripcion' name='descripcion'/>
                        {errors.descripcion && touched.descripcion ? <p>{errors.descripcion}</p>: null}

                        <label htmlFor='cantidad'>Cantidad de productos</label>
                        <Field type='number' id='cantidad' name='cantidad'/>
                        {errors.cantidad && touched.cantidad ? <p>{errors.cantidad}</p>: null}

                        <button type='submit'>Agregar a inventario</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default FormList;
