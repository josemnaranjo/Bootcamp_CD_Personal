import React, {useState} from 'react';
import './App.css';
import Home from './Views/Home';
import UserInfo from './Components/UserInfo';
import { HomeHookForm } from './Views/HomeHookForm';

function App() {
//     const [user, setUser] = useState({
//         fullName: '',
//         email: '',
//         age: 0,
//         address: '',
//         password: '',
//         confirmPassword: ''
//     });

// const [users,setUsers] = useState([]);
  return (
    <div className="App">
        {/* <Home user ={user} setUser ={setUser} users={users} setUsers={setUsers}/>
        {
            //optional chaining (?) =  es como decir users.lenght > 0 hazle un map, pero si no tiene largo no le hagas un map
            users?.map((user,index)=> (
                <UserInfo key={index} user={user}/>
            ) )
        } */}
        <HomeHookForm/>
    </div>
  );
}

export default App;
