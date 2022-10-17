import React, {useState} from 'react';

const SimpleForm = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const crearUsuario = (e) =>{
        e.preventDefault();
        const nuevoUsuario = {
            nombre,
            email,
            password
        };
        console.log("SE HA CREADO EL NUEVO USUARIO", nuevoUsuario);
    }


    return (
        <div>
            <form onSubmit={crearUsuario}>
                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input name="nombre" type="text" onChange={(e)=>setNombre(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="nombre">Correo Electronico</label>
                    <input name="email" type="text" onChange={(e)=>setEmail(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input name="password" type="password" onChange={(e)=>setPassword(e.target.value)}></input>
                </div>
                <input type="submit" value="crear usario"></input>
            </form>
            <div>
                <h1>Datos del formularios</h1>
                <p>Nombre: {nombre}</p>
                <p>Correo: {email}</p>
                <p>Constraseña: {password}</p>
            </div>
        </div>
    );
}

export default SimpleForm;
