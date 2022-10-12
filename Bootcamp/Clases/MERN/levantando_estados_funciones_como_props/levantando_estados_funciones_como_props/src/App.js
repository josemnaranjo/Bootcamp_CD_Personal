import './App.css';
import MessageForm from './components/MessageForm';
import MessageDisplay from './components/MessageDisplay';
import { useState } from 'react';

function App() {
    const [currentMsg,setCurrentMsg] = useState("Sin mensajes nuevos!");

    //(3) "tienesUnCorreo" ejecuta su funcion y cambia actualiza el valor del state "currentMsg" por el que llego en onNewMessage. 
    const tienesUnCorreo = (newMessage) => {
        setCurrentMsg(newMessage);
    }

  return (
    <div className="App">
        {/* (1) onNewMessage es el props que se pasa al componente MessageForm, en este caso es la funcion "tienes un correo" */}
        <MessageForm onNewMessage ={tienesUnCorreo}/>
        {/*(4) se envia el nuevo valor de currentMsg al componente MessageDisplay */}
        <MessageDisplay message={currentMsg}/>
    </div>
  );
}

export default App;
