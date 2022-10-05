import React, {useState} from 'react';

const Formulario = (props) => {
    const [userName,setUserName] = useState("");
    const [email,setEmail] = useState("");
    const [age,setAge] = useState("");
    const [password,setPassword] = useState("");

    const createUser = (e)=> {
        e.preventDefault();
        //en esta constante guardamos los datos del nuevo usuario
        const newUser = {userName,email,age,password};
        console.log("Bienvenido", userName);
    }

    return (
        <div>
            <h1>Formulario de ingreso</h1>
            {/*createUser es un evento que se dispara al hacer click en el botón, y le indica qué hacer con los datos generados.
            En este caso los guardamos en el objeto newUser. También acepta el evento "e", y en este caso corresponde a todos los 
            elementos del formulario
            Con e.preventDefault evitamos que el formulario se resetee cuando hacemos click, ya que es su comportamiento normal
            */}
            <form onSubmit ={createUser}>
                <label htmlFor="">Ingresa tu nombre:</label>
                {/*el evento onChange se ejecutará cada vez que el valor cambie, actualizando el valor de state respectivo*/}
                <input type="text" placeholder="Ingresa tu nombre..." onChange={ (e)=> setUserName(e.target.value)} value ={userName} />

                <label htmlFor="">Ingresa tu correo electrónico:</label>
                {/*e representa el evento que dispara onChange, y al pasarlo como parámetro podemos acceder al objeto que éste genera.
                Con e.target.value accedemos al texto que el usuario ingresa*/}
                <input type="text" placeholder="Correo electrónico" onChange={ (e)=> setEmail(e.target.value)}  value ={email}/>

                <label htmlFor="">Edad:</label>
                <input type="number" placeholder="Ingresa tu edad..." onChange={ (e)=> setAge(e.target.value)} value ={age} />

                <label htmlFor="">Contraseña</label>
                {/*Con "value={password}" mostramos en el input el último valor del state password. Esto hará que quede en blanco cuando
                enviemos el formulario, ya que se reseteará al hacerlo */}
                <input type="text" onChange={ (e)=> setPassword(e.target.value)} value ={password} />

                <button type="submit">Enviar datos</button>
            </form>
        </div>
    );
}

export default Formulario;
