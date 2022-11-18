import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { simplePost } from '../services/simplePost';
import {useUser} from "../context/useContext"
import LoginForm from '../components/LoginForm';
import { simpleGetAuth } from '../services/simpleGetAuth';

const Login = () => {
    const {setUser} = useUser();
    const navigate = useNavigate();

    const loginUsuario = async(values) =>{
        const response = await simplePost("/api/login", values);
        
        if(response.data.message===""){
            const response2 = await simpleGetAuth(`/api/user/${response.data._id}`);
            setUser(response2.data);
            navigate("/home");
        }else{
            console.log("Ups, ocurrio un error al iniciar sesion");
        }
    }
    return (
        <div>
            <LoginForm onSubmitProp={loginUsuario} ></LoginForm>
        </div>
    );
}

export default Login;
