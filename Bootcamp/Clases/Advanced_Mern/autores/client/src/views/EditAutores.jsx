import React, {useState,useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AutorForm from '../components/AutorForm';
import { getOneAutor, updateAutor } from '../services/autores-services';

const EditAutores = () => {
    const {id} =useParams();
    const [nombreAutor,setNombreAutor] = useState("");
    const [errors,setErrors]=useState([]);
    const navigate = useNavigate();

    const editAutorFromService = async(nombreAutor)=>{
        try{
            await updateAutor(id,{nombreCompleto:nombreAutor});
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

    const getOneAutorFromService = async ()=>{
        const autor = await getOneAutor(id);
        const autorFinal =autor.data.autor.nombreCompleto;
        console.log(autorFinal)
        setNombreAutor(autorFinal);
    }

    useEffect(() => {
        getOneAutorFromService()
    }, []);

    return (
        <div>
            <section className='titulo-add'>
                <h1>Autores Favoritos</h1>
                <Link to='/'>Home</Link>
                <p>Edita este autor</p>
            </section>
            {errors.map((err,i)=><p key={i}>{err}</p>)}
            <AutorForm nombreAutor={nombreAutor} setNombreAutor={setNombreAutor} onSubmitProp={editAutorFromService} />
        </div>
    );
}

export default EditAutores;
