import React, {useState} from 'react';


const Formulario = () => {
    const [nombre,setNombre] = useState('');
    const [apellido,setApellido] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPass,setconfirmPass] = useState('');


const createNewUSer = (e) => {
    e.preventDefault();
    const newUser ={nombre,apellido,email,password,confirmPass};
    console.log("Se creó el usuario:", nombre + " " + apellido );
    }

    return (
        <div>
            <form onSubmit ={createNewUSer}> 
                <label >Nombre:</label>
                <input type="text" placeholder="Ingresa tu nombre..." value={nombre} onChange={(e)=> setNombre(e.target.value)} />

                <label >Apellido:</label>
                <input type="text" placeholder="Ingresa tu apellido..." value={apellido} onChange={(e)=> setApellido(e.target.value)} />

                <label >Correo electrónico:</label>
                <input type="text" placeholder="Ingresa tu correo..." value={email} onChange={(e)=> setEmail(e.target.value)} />

                <label >Contraseña:</label>
                <input type="text" value={password} onChange={(e)=> setPassword(e.target.value)}/>

                <label >Confirmación de contraseña:</label>
                <input type="text" placeholder="Repite tu contraseña" value={confirmPass} onChange={(e)=> setconfirmPass(e.target.value)}/>
                <button type="submit">Enviar informacion</button>
            </form>

            <div>
                <p>Nombre:{nombre}</p>
                <p>Apellido:{apellido}</p>
                <p>Email:{email}</p>
                <p>Contraseña:{password}</p>
                <p>Confirmación de contraseña:{confirmPass}</p>
         </div>
        </div>
    );
}

export default Formulario;
