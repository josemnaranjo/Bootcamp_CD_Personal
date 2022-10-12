import React, {useState} from 'react';

const MessageForm = (props) => {
    const [msg,setMsg] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        //(2) El ejecutar handleSubmit, le pasamos al props onNewMessage (que equivale a la funcion "tienesUnCorreo") el state mensaje
        props.onNewMessage(msg);
    }
    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <h1>Set Message</h1>
                <textarea 
                    rows="4"
                    cols="50"
                    placeholder="Enter your message here"
                    onChange={ (e) => setMsg(e.target.value) }
                    value={ msg }
                ></textarea>
                <input type="submit" value="Send Message" />
            </form>
        </div>
    );
}

export default MessageForm;
