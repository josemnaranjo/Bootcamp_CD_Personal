import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import { useUser } from '../contexts/userContext';
import { getUserAuth, login } from '../services/pokemon.services';

const Login = () => {
    const [errors,setErrors] = useState([]);
    const navigate = useNavigate();
    const {setUser} = useUser();


    const logIn = async(values) =>{
        console.log("VALORES FORMULARIO", values);

        const response = await login(values);

        if(response.data.message===""){
            console.log("usuario loggeado ", response.data._id);
            const userID =response.data._id;
            const response2 = await getUserAuth(userID);
            console.log(response2);
            // setUser(response2.data);
            // navigate('/');

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
            <LoginForm email="" password="" onSubmitProp={logIn}/>
        </div>
    );
}

export default Login;
