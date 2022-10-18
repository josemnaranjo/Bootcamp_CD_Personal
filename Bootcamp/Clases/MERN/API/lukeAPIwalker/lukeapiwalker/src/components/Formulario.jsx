import React, {useState} from 'react';
import { getAllData } from '../services/Data-service';


const Formulario = (props) => {
    //recurso para consula a API
    const [recurso,setRecurso] = useState("");
    //ID para consulta a API
    const [id,setId] = useState("");

    //para guardar información de la API
    const {handleInformation} =props;

    const consultaApi = async (e,recurso,id) =>{
        e.preventDefault();
        console.log(recurso,id);
        try{
            const informationFromService = await getAllData(recurso,id);
            console.log("desde llamada api formulario",informationFromService);
            handleInformation(informationFromService,recurso);
        }catch(err){
            console.log(err.message)
            return(
                <div>
                    <img src={'./public/obiwan.jpeg'} alt="estos no son los droides"/>
                    <p>Estos no son los droides que buscas</p>
                </div>
            )    
        }
    }

    return (
        <div>
            <form onSubmit={e=> consultaApi(e,recurso,id)}>
                <select name='recurso' onChange={(e)=>setRecurso(e.target.value)}>
                    <option value='films'>Films</option>
                    <option value='people'>People</option>
                    <option value='planets'>Planets</option>
                    <option value='starships'>Starships</option>
                    {/* <option value='vehicles'>Vehicles</option> */}
                    <option value='species'>Species</option>
                </select>

                <label htmlFor='id'>Id:</label> 
                <input type='text' name='id' onChange={e=>setId(e.target.value)}/>

                <button type='submit'>Search</button>
            </form>

            
        </div>
    );
}

export default Formulario;




// console.log(recurso,id);
//         try{
//             const informationFromService = await getAllData(recurso,id);
//             console.log("desde llamada api formulario",informationFromService);


        