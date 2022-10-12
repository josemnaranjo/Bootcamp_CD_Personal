import React, {useState,useEffect} from 'react';

const Home = () => {

    //se puede pasar esta parte al App.js, así estará esta parte disponible para todos los componentes que lo requieran. Se debe pasar como props y luego se debe desestructurar 
    const [user,setUser] = useState({
        fullName: '',
        email: '',
        age: 0,
        address: '',
        password: '',
        confirmPass: '',
    });

    const onChange = (e)=> {
        const {value,name} = e.target; //desestructuracion del evento "e.target". Target es una parte del evento completo, el que contiene el valor y el 
        console.log(e.target);
        // console.log("Value:", value);
        // console.log("Name:", name);
        //creamos una copia completa de user y le indicamos que modifique la propiedad que estamos indicando, en este caso es [name] porque nos referimos al name que definimos en input, y este es dinámico por lo que para acceder tenemos que usar []. Asi esta funcion nos sirve para modificar todas las propiedades del usuario
        setUser({...user, [name]:value}) 
    }

    const sendUser = (e)=> {
        e.preventDefault();
        console.log("User",user);
        console.log("Evento",e);
    }

    // useEffect(() => {
    //    console.log("user:", user)
    // }, [user]);

    return (
        <div>
            <h1>Registro</h1>
            <form onSubmit ={(e)=> sendUser(e)}>
                <label htmlFor="">Nombre completo:</label>
                <input 
                type="text" placeholder="Ingresa tu nombre..." name="fullName" value={user.fullName}
                onChange ={(e) => onChange(e)} //"e" es el evento que desencadenó la llamada a la función. Es, en concreto, todo el objeto que sostiene el input
                />

                <label htmlFor="">Correo:</label>
                <input 
                type="text" placeholder="Ingresa tu correo..." name="email" value={user.email}
                onChange ={(e) => onChange(e)}
                />

                <label htmlFor="">Edad:</label>
                <input 
                type="number" placeholder="Ingresa tu edad..." name="age" value={user.age}
                onChange ={(e) => onChange(e)}
                />

                <label htmlFor="">Dirección:</label>
                <input 
                type="text" placeholder="Ingresa tu dirección..." name="address" value={user.address}
                onChange ={(e) => onChange(e)}
                />

                <label htmlFor="">Contraseña:</label>
                <input 
                type="text" placeholder="Crea una contraseña..." name="password" value={user.password}
                onChange ={(e) => onChange(e)}
                />

                <label htmlFor="">Confirmar contraseña:</label>
                <input 
                type="text" placeholder="Confirma tu contraseña..." name="confirmPass" value={user.confirmPass}
                onChange ={(e) => onChange(e)}
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default Home;
