import React, {useState,useEffect} from 'react';

const AdvanceForm = () => {
    //aqui usamos un useState para todos los datos, asi como un setFormInfo
    const [formInfo,setFormInfo] = useState({
        nombre: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    //LA PARTE DE LA VALIDACION
    const [errores,setErrores] = useState({
        nombre: "",
        email: "",
        password: "",
        confirmPassword: ""
    })


    const onChange = (e)=>{
        setFormInfo({
            ...formInfo,
            [e.target.name]:e.target.value
        });
    }

    const {nombre,email,password,confirmPassword} = formInfo;
    
    function validar() {
        const erroresAux = {
            nombre: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
        if(nombre.length<5){
            erroresAux.nombre ="El nombre es muy corto"
        }
        setErrores(erroresAux);
    }


    //useEffect permite escuchar los cambios en algún elemento (puede ser un useEffect) y ejecutar código.
    //recibe un callback, allí va el código a ejecutar cada vez que se vean cambios en el elemento definido dentro de los corchetes
    
    useEffect(() => {
        validar();
    }, [formInfo]);



    const crearUsuario = (e)=>{
        e.preventDefault();
        console.log("Se ha creado el usuario",formInfo.nombre)
    }
    return (
        <div>
            <form onSubmit ={crearUsuario}>
                <div>
                    <label htmlFor="nombre">Nombre:</label>
                    {/*onChange, onSubmit por defecto envian el evento que los genera*/}
                    <input name="nombre" type="text" onChange={onChange}></input>
                    <p>{errores.nombre}</p>
                </div>
                <div>
                    <label htmlFor="email">Correo electronico:</label>
                    <input name="email" type="text" onChange={onChange}></input>

                </div>
                <div>
                    <label htmlFor="password">Contraseña:</label>
                    <input name="password" type="text" onChange={onChange}></input>

                </div>
                <div>
                    <label htmlFor="confirmPasswor">Confirmar contraseña:</label>
                    <input name="confirmPassword" type="text" onChange={onChange}></input>

                </div>
                <input type="submit" value="enviar datos"/>
            </form>
        </div>
    );
}

export default AdvanceForm;
