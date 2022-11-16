import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';
import { useUser } from '../contexts/userContext';
import { createUser, getUserAuth } from '../services/pokemon.services';

const Register = () => {
    const [errors,setErrors] = useState([]);
    const navigate = useNavigate();
    const {setUser} = useUser();


    const registrarUsuario = async(values) =>{
        console.log("VALORES FORMULARIO", values);

        const response = await createUser(values);


        if(response.data.message===""){
            console.log("usuario creado ", response.data);
            const response2 = await getUserAuth(response.data._id);
            setUser(response2.data);
            navigate('/');
        }else{
            const errorResponse = response.data.errors;
            const errorArr =[];
            for(const key of Object.keys(errorResponse)){
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr)
        }

    }
    return (
        <div>
            {errors?.map((err,i)=>(<div key={i}>{err}</div>))}
            <RegisterForm firstName="" lastName="" email="" password="" confirmPassword="" onSubmitProp={registrarUsuario} />
        </div>
    );
}

export default Register;
