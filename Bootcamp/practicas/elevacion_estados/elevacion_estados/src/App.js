import React, {useState} from 'react';
import './App.css';
import Hijo from './components/Hijo';
import OtroHijo from './components/OtroHijo';

function App() {
    const [count,setCount] = useState(0);

    const titulo = "Titulo heredado de App";


    const sumar = () =>{
        setCount(count+1);
    }

    const restar = ()=> {
        setCount(count-1);
    }
  return (
    <div className="App">
     <Hijo sumar={sumar} restar={restar} titulo={titulo} count ={count}/>
     <OtroHijo />
    </div>
  );
}

export default App;
