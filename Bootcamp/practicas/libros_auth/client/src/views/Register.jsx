import React from 'react';
import { simplePost } from '../services/simplePost';
import {simpleGetAuth} from '../services/simpleGetAuth';
import RegisterForm from '../components/RegisterForm';
import { useUser } from '../context/useContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const {setUser} = useUser();
    const navigate = useNavigate();
    const registrarUsuario = async(values)=>{
        const response = await simplePost('/api/register',values);
        if(response.data.message===""){
            console.log("USUARIO REGISTRADO - REGISTER VIEW ", response.data);
            const response2 = await simpleGetAuth(`/api/user/${response.data._id}`);
            console.log("DATOS DE USUARIO REGISTRADO - DESDE SIMPLEGETAUTH ",response2);
            setUser(response2.data);
            navigate('/home');
        }else{
            console.log("Ups, ocurrio un error al registrar el usuario");
        }
    }
    return (
        <div>
            <RegisterForm firstName="" lastName="" email="" password="" confirmPassword="" onSubmitProp={registrarUsuario} />
        </div>
    );
}

export default Register;
