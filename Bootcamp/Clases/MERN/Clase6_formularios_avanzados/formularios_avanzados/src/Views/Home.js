import React, {useState} from 'react';
import UserInfo from '../Components/UserInfo';

const Home = ({user,setUser,users,setUsers}) => {

    //podemos iniciarlo como vacio porque usamos ? que maneja ese undefined
    const [errorUser,setErrorUser] =useState();
    
    const onChangeFormField = (e) => {
        const { value, name } = e.target;
        if(value ===""){
            setErrorUser({...errorUser,[name]:`El campo ${name} es obligatorio`})
        }
        setUser({...user,[name]:value});
    }

    const addUser = (e) => {
        e.preventDefault();
        // paso el nuevo usuario que acabamos de crear y agrego el arreglo 
        setUsers([user,...users]);
        //reseteamos los valores a vacíos cada vez que mandamos un nuevo usuario
        setUser({
            fullName:"",
            email:"",
            age:"",
            address:"",
        })
    }
    
    return (
        <div>
        <h1>Registro</h1>
        <form onSubmit={(e) => addUser(e)}>
            <label htmlFor="">Nombre Completo</label>
            <input 
                type="text" 
                placeholder="Ingresa tu nombre completo..." 
                name="fullName" 
                value={user.fullName}
                onChange={(e) => onChangeFormField(e)}
            />
            {/*errorres*/}
            <p>{errorUser?.fullName}</p>


            <label htmlFor="">Email</label>
            <input 
                type="text" 
                placeholder="Ingresa tu email..." 
                name="email" 
                value={user.email}
                onChange={(e) => onChangeFormField(e)}
            />
            <p>{errorUser?.email}</p>

            <label htmlFor="">Direccion:</label>
            <input 
                type="text" 
                placeholder="Ingresa tu direccion..." 
                name="address" 
                value={user.address}
                onChange={(e) => onChangeFormField(e)}
            />
            <p>{errorUser?.address}</p>

             <label htmlFor="">Edad:</label>
            <input 
                type="number" 
                placeholder="Ingresa tu edad..." 
                name="age" 
                value={user.age}
                onChange={(e) => onChangeFormField(e)}
            />
            <p>{errorUser?.age}</p>
            <button type="submit">Enviar</button>

        </form>
        <UserInfo user={user}/>
    </div>
    );
}

export default Home;
