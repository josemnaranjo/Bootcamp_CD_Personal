import React from 'react';
import  {state,useState} from 'react';

const Comentario = () => {
    const {comentario,setComentario} = useState({
        comentario: ''
    })

const enviarComentario = (e) => {
    e.preventDefault();
}

const nuevoComentario = (e)=> {
    const {name,value} = e.target;
    setComentario({...comentario,[name]:value});
    console.log(comentario);
}

    return (
        <div>
            <h1>Ingresa tu comentario</h1>
            <form htmlfor="" onSubmit ={(e)=> enviarComentario(e)}>
            <input type="text" placeholder="Ingresa tu mensaje..." name="coment" value={comentario.value} onChange={(e)=>nuevoComentario(e)}/>
            <button type="submit">Envia tu comentario</button>
            </form>
        </div>
    );
}

export default Comentario;
