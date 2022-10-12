import React, {useState} from 'react';
import Form from './components/Form';
import Results from './components/Results';

function App() {
    const [state,setUserData] = useState({
        nombre: "",
        apellido: "",
        email:"",
        password:"",
        confirmPassword:"",
    })
  return (
    <div className="App">
        <Form user ={state} setUserData={setUserData}/>
        <Results user = {state}/>
    </div>
   ); 
}
    


export default App;
