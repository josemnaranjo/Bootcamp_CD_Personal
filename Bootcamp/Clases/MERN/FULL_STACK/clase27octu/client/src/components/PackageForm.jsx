import React from 'react';
import moment from 'moment';
import {Formik, Form,Field} from 'formik';
import * as Yup from 'yup';
import { createTravel } from '../services/travel-service';

const PackageForm = () => {

    return (
        <div>
            <Formik
            initialValues={{
                packageName:'',
                origin:'',
                destination:'',
                price:'',
                arrive_date: moment().format('dd-MM-yyyy')
            }}

            validationSchema = {Yup.object().shape({
                packageName: Yup.string()
                .min(3,"El nombre del paquete turístico no puede tener menos de 2 caracteres")
                .required("Este campo es obligatorio"),

                origin: Yup.string()
                .required("Este campo es obligatorio"),

                destination: Yup.string()
                .max(8, "El nombre del destino no puede superar los 8 caracteres")
                .required("Este campo es obligatorio"),

                price: Yup.number()
                .min(1,"El valir debe superar 1 carater de largo")
                .required("Este campo es obligatorio"),

                arrive_date: Yup.date()
                .required("Este campo es obligatorio")
            })}

            onSubmit={async(values)=>{
                try{
                    const createTravelInService = await createTravel(values);
                    console.log(values);
                    console.log("desde onSubmit de PackageForm",createTravelInService);
                } catch(err){
                    console.log(err);
                }
                
            }}
            >
                {({errors,touched,handleSubmit})=>{
                    return(
                        <div>
                            <h2>Formulario de viajes</h2>
                            <Form>
                                <label htmlFor='packageName'>Nombre del paquete</label>
                                <Field type='text' name='packageName' />
                                {errors.packageName && touched.packageName ? <p>{errors.packageName}</p>: null}

                                <label htmlFor='origin'>Origen</label>
                                <Field type='text' name='origin' />
                                {errors.origin && touched.origin ? <p>{errors.origin}</p>: null}

                                <label htmlFor='destination'>Destino</label>
                                <Field type='text' name='destination' />
                                {errors.destination && touched.destination ? <p>{errors.destination}</p>: null}

                                <label htmlFor='price'>Precio</label>
                                <Field type='number' name='price' />
                                {errors.price && touched.price ? <p>{errors.price}</p>: null}


                                <label htmlFor='arrive_date'>Nombre del paquete</label>
                                <Field type='date' name='arrive_date' />
                                {errors.arrive_date && touched.arrive_date ? <p>{errors.arrive_date}</p>: null}
                                
                                
                                <button type='submit'>Agregar</button>

                            </Form>
                        </div>
                    )
                }}
                
            </Formik>
        </div>
    );
}

export default PackageForm;
