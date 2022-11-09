import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';

const AutorForm = (props) => {
    const {nombreAutor, setNombreAutor, onSubmitProp}= props;
    const navigate = useNavigate();
    // const [nombreAutor,setNombreAutor]= useState("");

    const handleSubmit = e =>{
        e.preventDefault();
        onSubmitProp(nombreAutor);
    }


    const toHome = ()=>{
        navigate('/')
    }


    return (
        <div>
            <section className='formulario'>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='nombreCompleto'>Nombre:</label>
                    <input type='text' name='nombreCompleto' value={nombreAutor} onChange={(e)=>setNombreAutor(e.target.value)}/>
                    <section className='buttons-formulario'>
                        <Button variant='secondary' onClick={()=>toHome()}>Cancelar</Button>
                        <Button variant='success' type='submit'>Enviar</Button>
                    </section>
                </form>
            </section>
        </div>
    );
}

export default AutorForm;
