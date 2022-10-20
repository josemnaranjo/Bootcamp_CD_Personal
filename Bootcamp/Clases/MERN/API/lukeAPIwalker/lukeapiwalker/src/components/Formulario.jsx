import React, {useState} from 'react';
import { getAllData } from '../services/Data-service';
import Obiwan from '../obiwan.jpeg';
import styles from './Formulario.module.css';

const Formulario = (props) => {
    //recurso para consula a API
    const [recurso,setRecurso] = useState("");
    //ID para consulta a API
    const [id,setId] = useState("");
    //switch para mostar div de error
    const [error,setError] = useState(false);

    //para guardar información de la API
    const {handleInformation} =props;

    const consultaApi = async (e,recurso,id) =>{
        e.preventDefault();
        try{
            const informationFromService = await getAllData(recurso,id);
            console.log("desde llamada api formulario",informationFromService);
            handleInformation(informationFromService,recurso);
            setError(false);
        }catch(err){
            console.log(err.message)
            return(
                setError(true)
            )    
        }
    }

    return (
        <div className={styles.formularioContainer}>
            <h1>Luke APIWalker</h1>
            <form className={styles.form} onSubmit={e=> consultaApi(e,recurso,id)}>
                <select className={`form-select ${styles.select}`}name='recurso' onChange={(e)=>setRecurso(e.target.value)}>
                    <option value='none'>Selecciona una opción</option>
                    <option value='films'>Films</option>
                    <option value='people'>People</option>
                    <option value='planets'>Planets</option>
                    <option value='starships'>Starships</option>
                    {/* <option value='vehicles'>Vehicles</option> */}
                    <option value='species'>Species</option>
                </select>

                <div className={`input-group ${styles.idHolder}`}>
                    <span className='input-group-text' htmlFor='id'>Id:</span> 
                    <input className='form-control' type='text' name='id' onChange={e=>setId(e.target.value)}/>
                </div>
                <button className='btn btn-dark' type='submit'>Search</button>
            </form>
            {error? (<div className={styles.error}>
                    <img src={Obiwan} alt="estos no son los droides"/>
                    <p>Estos no son los droides que buscas</p>
                </div>):""}
        </div>
    );
}

export default Formulario;




