import React,{useState} from 'react';

const Form = () => {
    const [firstNameError, setFirstNameError] = useState(""); 
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
  
  
    
    const validationNameAndLast = (e) => {
        if (e.target.value.length < 2 && e.target.value.length > 0) {
                if(e.target.name === "firstName") {
                    setFirstNameError("En nombre debe tener al menos 2 caracteres de largo");
                } else if(e.target.name ==="lastName") {
                    setLastNameError("En apellido debe tener al menos 2 caracteres de largo");
                }          
        } else {
            if(e.target.name === "firstName") {
                setFirstNameError("");
            } else if(e.target.name ==="lastName"){
                setLastNameError("");
            }       
        }
    }

    const validationEmail = (e) => {
        if (e.target.value.length < 5) {
            setEmailError("En correo debe tener al menos 5 caracteres de largo");
        } else {
            setEmailError("");
        }
    }

    const validationPassword= (e) => {
            setPassword(e.target.value);
            if(e.target.value.length < 8 && e.target.value.length > 0) {
                    setPasswordError("La contraseña debe tener al menos 8 caracteres de largo");
            } else {
                setPasswordError("")
            }
    }
    
    const validationPasswordAndConfirmPassword = (e) => {
        if(e.target.value === password) {
            setConfirmPasswordError("")
        } else {
            setConfirmPasswordError("Las contraseñas tienen que ser iguales");
        }
    }

    return (
        <div>
        <h1>Formulario de ingreso</h1>
        <form>
            <div>
                <label htmlFor="">Ingresa tu nombre:</label>
                <input type="text" name="firstName" placeholder="Ingresa tu nombre..." onChange={validationNameAndLast}/>
                
                {firstNameError ? <p>{firstNameError}</p>: ""}
            </div>

            <div>
                <label htmlFor="">Ingresa tu apellido:</label>
                <input type="text" name="lastName" placeholder="Ingresa tu apellido..." onChange={validationNameAndLast} />
                {lastNameError ? <p>{lastNameError}</p>: ""}
            </div>

            <div>
                <label htmlFor="">Ingresa tu correo electrónico:</label>
                <input type="text" placeholder="Correo electrónico" onChange={validationEmail} />
                {emailError ? <p>{emailError}</p>: ""}
            </div>
            
            <div>
                <label htmlFor="">Contraseña</label>
                <input type="password" name="password" onChange={validationPassword }/>
                {passwordError ? <p>{passwordError}</p> : ""}
            </div>

            <div>
                <label htmlFor="">Confirma contraseña:</label>
                <input type="password" name="confirmPassword" onChange={validationPasswordAndConfirmPassword}/>
                {confirmPasswordError ? <p>{confirmPasswordError}</p> : ""}
            </div>
        </form>
    </div>
    );
}

export default Form;
