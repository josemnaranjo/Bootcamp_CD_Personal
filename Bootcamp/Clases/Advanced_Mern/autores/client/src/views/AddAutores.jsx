import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AutorForm from '../components/AutorForm';
import { createAutor } from '../services/autores-services';

const AddAutores = () => {
    
    const [nombreAutor,setNombreAutor]=useState("");
    const [errors,setErrors]=useState([]);
    const navigate = useNavigate();

    const agregarAutor = async(nombreAutor)=>{
        try{
            await createAutor({nombreCompleto:nombreAutor});
            navigate('/')
        }catch(err){
            const errorResponse = err.response.data.errors;
            const errorArr = [];
            for(const key of Object.keys(errorResponse)){
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        }
    }
    return (
        <div>
            <section className='titulo-add'>
                <h1>Autores Favoritos</h1>
                <Link to='/'>Home</Link>
                <p>Agrega un nuevo autor</p>
            </section>
            {errors.map((err,i)=><p key={i}>{err}</p>)}
            <AutorForm nombreAutor={nombreAutor} setNombreAutor={setNombreAutor} onSubmitProp={agregarAutor} />
        </div>
    );
}

export default AddAutores;
