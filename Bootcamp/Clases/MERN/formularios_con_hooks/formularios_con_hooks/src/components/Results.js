import React from 'react';

const Results = ({user}) => {
    const {nombre,apellido, email,password,confirmPassword} = user;
    return (
        <div>
            <p>Nombre:{nombre}</p>
            <p>Apellido:{apellido}</p>
            <p>Email:{email}</p>
            <p>Contraseña:{password}</p>
            <p>Confirmación de contraseña:{confirmPassword}</p>
        </div>
    );
}

export default Results;
