import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getOneUser } from '../Services/users-service';

const User = () => {

    const {foobar} = useParams();
    const [user,setUser] = useState("");

    const getUsersFromService = async (foobar) => {
        const usersFromService = await getOneUser(foobar);
        setUser(usersFromService);
    }

    useEffect(()=>{
        getUsersFromService();
    },[])

    return (
        <div>
            <h1>{user}</h1>
        </div>
    );
}

export default User;


//hacer que funcione con 1 solo elemento al ingresar a 3000/users/cualquier_cosa