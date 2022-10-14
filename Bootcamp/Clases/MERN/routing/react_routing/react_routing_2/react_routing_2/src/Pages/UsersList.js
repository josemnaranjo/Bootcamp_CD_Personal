import React,{useState,useEffect} from 'react';
import { getAllUsers } from '../Services/users-service';

const UsersList = () => {

    const [users,setUsers] = useState([]);

    const getUsersFromService = async () => {
        const usersFromService = await getAllUsers();
        setUsers(usersFromService);
    }

    useEffect(()=>{
        getUsersFromService();
    },[])

    return (
        <div>
            {users?.map((user,i)=>(
                <div key={i}>
                    <img src={user.picture.medium} alt={`Foto de perfil de ${user.name}`}/>
                    <h1>{user.name.first} {user.name.last}</h1>
                </div>
            ))}
        </div>
    );
}

export default UsersList;
