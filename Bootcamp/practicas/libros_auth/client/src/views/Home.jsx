import React from 'react';
import { useUser } from '../context/useContext';
import logout from '../services/logout';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const {user,setUser} = useUser();
    const navigate = useNavigate();
    
    const renderInfo = () => {
        if(user){
            return (<>Bienvenido {user.firstName} {user.lastName}</>)
        }else{
            return (<>NO HAY USUARIO LOGGUEADO</>)
        }
    }

    const logOut = async() => {
        const {success} = await logout();
        if (success) {
            setUser(null);
            navigate('/');
        }
        else {
            window.alert("Error. No se puede deslogear")
        }
    }
    return (
        <div>
            <h1>{renderInfo()}</h1>
            {user && <button onClick={logOut}>Logout</button>}
        </div>
    );
}

export default Home;
